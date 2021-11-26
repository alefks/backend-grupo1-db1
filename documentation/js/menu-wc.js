'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend-grupo1-btc-db1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' : 'data-target="#xs-controllers-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' :
                                            'id="xs-controllers-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' : 'data-target="#xs-injectables-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' :
                                        'id="xs-injectables-links-module-AppModule-01b2ec9625b4139cc9b7a541c21a1ae1d14c4980960aaca173b05a589a1aaa3c750187f2deb0b19aa95afacc4b8ffeffef07c0da9392525bf110ccdfb0d4c652"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckinModule.html" data-type="entity-link" >CheckinModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' : 'data-target="#xs-controllers-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' :
                                            'id="xs-controllers-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' }>
                                            <li class="link">
                                                <a href="controllers/checkinController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >checkinController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' : 'data-target="#xs-injectables-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' :
                                        'id="xs-injectables-links-module-CheckinModule-f202f169273099588ef2fc7465708d030ca4832d07f22828a4f42febf1c4430dbf85e3e6799ac0f73b2acd03c0e088ae4a264c72bb2fcdab2c40870184cefac3"' }>
                                        <li class="link">
                                            <a href="injectables/CheckinService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckinService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KeyresultsModule.html" data-type="entity-link" >KeyresultsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' : 'data-target="#xs-controllers-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' :
                                            'id="xs-controllers-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' }>
                                            <li class="link">
                                                <a href="controllers/KeyResultsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeyResultsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' : 'data-target="#xs-injectables-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' :
                                        'id="xs-injectables-links-module-KeyresultsModule-5d2824b7d86b880327751d6711c9fb6135bcf0488bec4d7ea88b396f844a9f8837e9795c964db7c58a669a4f8c8b0cc587cb094454a38e037680b5a967705743"' }>
                                        <li class="link">
                                            <a href="injectables/KeyResultsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeyResultsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObjectiveModule.html" data-type="entity-link" >ObjectiveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' : 'data-target="#xs-controllers-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' :
                                            'id="xs-controllers-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' }>
                                            <li class="link">
                                                <a href="controllers/ObjectiveController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectiveController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' : 'data-target="#xs-injectables-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' :
                                        'id="xs-injectables-links-module-ObjectiveModule-981cd9209347f373c9c0fd7a7f28438957a6abf5222e1933e0b7624d8b9df3d6848ef7db8fe9df8343976d2531ff86253b8f2d1d13d2fc4acdabd5e16a63c2b1"' }>
                                        <li class="link">
                                            <a href="injectables/ObjectiveService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectiveService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeamModule.html" data-type="entity-link" >TeamModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' : 'data-target="#xs-controllers-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' :
                                            'id="xs-controllers-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' }>
                                            <li class="link">
                                                <a href="controllers/TeamController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' : 'data-target="#xs-injectables-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' :
                                        'id="xs-injectables-links-module-TeamModule-aa1a37f8053dfe3dd822c62190752495409cd2469a1a163090c2af24401e0baf970ad57df263eda54b85c247ffba9a287e34a161c959e7d290a718c77c8d1097"' }>
                                        <li class="link">
                                            <a href="injectables/TeamService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeamPartnerModule.html" data-type="entity-link" >TeamPartnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' : 'data-target="#xs-controllers-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' :
                                            'id="xs-controllers-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' }>
                                            <li class="link">
                                                <a href="controllers/TeamPartnerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamPartnerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' : 'data-target="#xs-injectables-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' :
                                        'id="xs-injectables-links-module-TeamPartnerModule-c6f24d2217f90824a0fe922c885bb5ef660e061fe08c506e8b956a7db4a232f6b324d8034f281fee2750f02a658f0c5d0445c74dc809f31d8b9e9d63c80a4ce6"' }>
                                        <li class="link">
                                            <a href="injectables/TeamPartnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamPartnerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/checkinController.html" data-type="entity-link" >checkinController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KeyResultsController.html" data-type="entity-link" >KeyResultsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ObjectiveController.html" data-type="entity-link" >ObjectiveController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TeamController.html" data-type="entity-link" >TeamController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TeamPartnerController.html" data-type="entity-link" >TeamPartnerController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCheckinDto.html" data-type="entity-link" >CreateCheckinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateKeyResultsDto.html" data-type="entity-link" >CreateKeyResultsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateObjectiveDto.html" data-type="entity-link" >CreateObjectiveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeamDto.html" data-type="entity-link" >CreateTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeamPartnerDto.html" data-type="entity-link" >CreateTeamPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCheckinDto.html" data-type="entity-link" >UpdateCheckinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateKeyResultsDto.html" data-type="entity-link" >UpdateKeyResultsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateObjectiveDto.html" data-type="entity-link" >UpdateObjectiveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeamDto.html" data-type="entity-link" >UpdateTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeamPartnerDto.html" data-type="entity-link" >UpdateTeamPartnerDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckinService.html" data-type="entity-link" >CheckinService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KeyResultsService.html" data-type="entity-link" >KeyResultsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObjectiveService.html" data-type="entity-link" >ObjectiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamPartnerService.html" data-type="entity-link" >TeamPartnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamService.html" data-type="entity-link" >TeamService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});