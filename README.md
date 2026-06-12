# WebProgrammin_MiniProject_ReadingRoom

Browser Compatibility

The application has been developed and tested primarily in Microsoft Edge (Chromium-based browsers) and is fully functional in that environment.

During testing, Firefox exhibited inconsistent behavior when loading locally hosted MP4 video files through a local development server. The issue persisted even when using a minimal test page containing only a video element and was therefore determined not to be caused by the application's JavaScript, HTML, or CSS implementation.

The problem appears to be related to Firefox's handling of locally served media files on certain localhost configurations. In some cases, videos may load slowly, inconsistently, or fail to display despite the media files themselves being valid and functioning correctly in other browsers.

For the best experience, Microsoft Edge or another Chromium-based browser is recommended.