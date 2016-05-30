/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { LoginController } from './login/login.controller';
import { HomeController } from './home/home.controller';
import { HomeBookmarksController } from './home/home-bookmarks.controller';
import { ComposerController } from './composer/composer.controller';
import { ComposerListController } from './composer/composer-list.controller';
import { CompositionController } from './composition/composition.controller';
import { CompositionSheetController } from './composition/composition-sheet.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { registerComponents } from '../app/components/index';

declare var malarkey: any;
declare var moment: moment.MomentStatic;
declare var firebase: any;

module lilybook {
  'use strict';

  angular.module('lilybook', [
    'ngAnimate',
    'ui.router',
    'ngMaterial',
    'toastr',
    'lilybook.data',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'info.vietnamcode.nampnq.videogular.plugins.youtube',
    'slickCarousel'
  ]).constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('firebase', firebase)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .controller('LoginController', LoginController)
    .controller('HomeController', HomeController)
    .controller('HomeBookmarksController', HomeBookmarksController)
    .controller('ComposerController', ComposerController)
    .controller('ComposerListController', ComposerListController)
    .controller('CompositionController', CompositionController)
    .controller('CompositionSheetController', CompositionSheetController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);

  registerComponents();
}
