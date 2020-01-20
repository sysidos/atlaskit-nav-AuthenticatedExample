import React from 'react';

import { DefaultCreate } from './packages/navigation/atlassian-navigation/examples/shared/Create';
import { defaultPrimaryItems } from './packages/navigation/atlassian-navigation/examples/shared/PrimaryItems';
import { DefaultProductHome } from './packages/navigation/atlassian-navigation/examples/shared/ProductHome';
import { DefaultSearch } from './packages/navigation/atlassian-navigation/examples/shared/Search';
import { DefaultSettings } from './packages/navigation/atlassian-navigation/examples/shared/Settings';
import { AtlassianNavigation } from '@atlaskit/atlassian-navigation';
import { ProfilePopup } from './packages/navigation/atlassian-navigation/examples/shared/ProfilePopup';
import { SwitcherPopup } from './packages/navigation/atlassian-navigation/examples/shared/SwitcherPopup';
import { HelpPopup } from './packages/navigation/atlassian-navigation/examples/shared/HelpPopup';
import { NotificationsPopup } from './packages/navigation/atlassian-navigation/examples/shared/NotificationsPopup';

const AuthenticatedExample = () => (
  <AtlassianNavigation
    primaryItems={defaultPrimaryItems}
    renderAppSwitcher={SwitcherPopup}
    renderCreate={DefaultCreate}
    renderHelp={HelpPopup}
    renderNotifications={NotificationsPopup}
    renderProductHome={DefaultProductHome}
    renderProfile={ProfilePopup}
    renderSearch={DefaultSearch}
    renderSettings={DefaultSettings}
  />
);

export default AuthenticatedExample;
