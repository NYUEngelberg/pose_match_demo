/**
 * Analytics Configuration — Engelberg Center live deployment ONLY.
 *
 * This file is layered onto pose_match_demo by deploy/deploy.sh and is the
 * ONE difference from the public template (whose analytics.js is a no-op,
 * so other institutions' deployments never report here).
 *
 * PLACEHOLDER: currently uses the same Plausible site as the dev repo's
 * deployment. Swap the script URL below when the final Plausible site for
 * pose-match.glamelab.org is chosen.
 */

(function() {
  try {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://plausible.io/js/pa-1E23ur5gghzXU6vzBVaTA.js';
    document.head.appendChild(script);
    window.plausible = window.plausible || function() {
      (plausible.q = plausible.q || []).push(arguments);
    };
    plausible.init = plausible.init || function(i) { plausible.o = i || {}; };
    plausible.init();
  } catch (e) {
    // Analytics failed to load - site continues to work normally
    console.log('Analytics not loaded');
  }
})();
