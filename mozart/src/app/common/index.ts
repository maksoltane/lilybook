import { BadgeHenleComponent } from './badges/henle.component';
import { BadgeKeyComponent } from './badges/key.component';
import { BadgeRcmComponent } from './badges/rcm.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BookmarkDataService } from './data/bookmark.service';
import { ComposerDataService } from './data/composer.service';
import { CompositionDataService } from './data/composition.service';
import { DefinitionDataService } from './data/definition.service';
import { UserDataService } from './data/user.service';
import { LoginModalService } from './modals/login.service';
import { SignupModalService } from './modals/signup.service';

export const CommonModule = angular
    .module('lilybook.common', [])
    .component('lbBadgeHenle', BadgeHenleComponent)
    .component('lbBadgeKey', BadgeKeyComponent)
    .component('lbBadgeRcm', BadgeRcmComponent)
    .component('lbHeader', HeaderComponent)
    .component('lbSidenav', SidenavComponent)
    .service('bookmarkDataService', BookmarkDataService)
    .service('composerDataService', ComposerDataService)
    .service('compositionDataService', CompositionDataService)
    .service('definitionDataService', DefinitionDataService)
    .service('userDataService', UserDataService)
    .service('loginModalService', LoginModalService)
    .service('signupModalService', SignupModalService)
    .name;
