/**
 * Every Turkish translation used by `src/lib/i18n.tsx`.
 *
 * One module per surface so translations can be added without two people
 * editing the same giant object. Each export maps an English source string
 * (the key) to its Turkish text (the value); anything missing falls back to
 * the English original, so partial coverage is always safe.
 */
import { trShell } from './shell';
import { trGlobalStatusBar } from './globalStatusBar';
import { trViewPresets } from './viewPresets';
import { trKeyboardShortcuts } from './keyboardShortcuts';
import { trScaleBar } from './scaleBar';
import { trMapControls } from './mapControls';
import { trSearchBar } from './searchBar';
import { trSharePanel } from './sharePanel';
import { trIntelFeed } from './intelFeed';
import { trLayerPanel } from './layerPanel';
import { trDirectionsBar } from './directionsBar';
import { trNavigationView } from './navigationView';
import { trMarketsPanel } from './marketsPanel';
import { trOsirisMap } from './osirisMap';
import { trLiveAlerts } from './liveAlerts';
import { trCameraViewer } from './cameraViewer';
import { trSpaceCam } from './spaceCam';
import { trDrawHud } from './drawHud';
import { trFlightWatchPanel } from './flightWatchPanel';
import { trScmPanel } from './scmPanel';
import { trDrawingToolbar } from './drawingToolbar';
import { trOsintPanel } from './osintPanel';
import { trWorldRemote } from './worldRemote';
import { trArcgisPanel } from './arcgisPanel';
import { trOiPanel } from './oiPanel';

export const translations: Record<string, string> = {
  ...trShell,
  ...trGlobalStatusBar,
  ...trViewPresets,
  ...trKeyboardShortcuts,
  ...trScaleBar,
  ...trMapControls,
  ...trSearchBar,
  ...trSharePanel,
  ...trIntelFeed,
  ...trLayerPanel,
  ...trDirectionsBar,
  ...trNavigationView,
  ...trMarketsPanel,
  ...trOsirisMap,
  ...trLiveAlerts,
  ...trCameraViewer,
  ...trSpaceCam,
  ...trDrawHud,
  ...trFlightWatchPanel,
  ...trScmPanel,
  ...trDrawingToolbar,
  ...trOsintPanel,
  ...trWorldRemote,
  ...trArcgisPanel,
  ...trOiPanel,
};
