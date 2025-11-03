import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedResources, setLoadedResources] = useState(0);
  const [totalResources, setTotalResources] = useState(0);
  const location = useLocation();

  const checkResourcesLoaded = () => {
    return new Promise((resolve) => {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const images = document.querySelectorAll('img');
        const videos = document.querySelectorAll('video');
        const allResources = [...images, ...videos];
        
        if (allResources.length === 0) {
          setTotalResources(0);
          setLoadedResources(0);
          resolve();
          return;
        }

        setTotalResources(allResources.length);
        let loadedCount = 0;

        const updateProgress = () => {
          loadedCount++;
          setLoadedResources(loadedCount);
          
          if (loadedCount === allResources.length) {
            // Small delay for smooth transition
            setTimeout(() => {
              resolve();
            }, 300);
          }
        };

        // Check images
        images.forEach((img) => {
          if (img.complete && img.naturalHeight !== 0) {
            updateProgress();
          } else {
            const handleLoad = () => {
              img.removeEventListener('load', handleLoad);
              img.removeEventListener('error', handleLoad);
              updateProgress();
            };
            img.addEventListener('load', handleLoad);
            img.addEventListener('error', handleLoad);
          }
        });

        // Check videos
        videos.forEach((video) => {
          if (video.readyState >= 3) {
            updateProgress();
          } else {
            const handleLoad = () => {
              video.removeEventListener('canplaythrough', handleLoad);
              video.removeEventListener('error', handleLoad);
              updateProgress();
            };
            video.addEventListener('canplaythrough', handleLoad);
            video.addEventListener('error', handleLoad);
          }
        });
      }, 100);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setLoadedResources(0);
    setTotalResources(0);

    const loadPage = async () => {
      try {
        await checkResourcesLoaded();
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resources:', error);
        setIsLoading(false);
      }
    };

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    loadPage();

    return () => clearTimeout(timeout);
  }, [location.pathname]); // Re-run when route changes

  const progress = totalResources > 0 ? (loadedResources / totalResources) * 100 : 0;

  return {
    isLoading,
    loadedResources,
    totalResources,
    progress
  };
};