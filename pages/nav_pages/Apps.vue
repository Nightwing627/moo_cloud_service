<template>
  <section>
    <section data-pg-name="Menu" data-pgc="moo.topbar"> 
            <nav class="bg-dark font-weight-bold justify-content-center navbar navbar-expand pb-0 pt-0"> 
                <div class="container-md justify-content-end ml-0 mr-0 pb-1 pe-2 pl-0 pr-0 ps-2 pt-1 top-bar-navbar"> 
                    <ul class="align-items-center justify-content-end m-0 navbar-nav p-0"> 
                        <li class="active nav-item pl-2 pr-2"> 
                            <a class="nav-link text-white" href="https://support.moocloud.ch">Support</a> 
                        </li>                         
                        <li class="active nav-item pl-2 pr-2"> 
                            <a class="nav-link text-white" href="https://status.moocloud.ch/">Status</a> 
                        </li>                         
                        <li class="active nav-item pl-2 pr-2"> 
                            <a class="nav-link text-white" href="https://easymanager.moocloud.ch/login" tabindex="-1" aria-disabled="true">Login</a> 
                        </li>
                        <li class="active d-inline-flex ms-2 nav-item p-0 pr-2" style="height: 2rem;">
                            <select id="currencySelector" aria-label="Default select example" class="form-select form-select-sm w-auto"> 
                                <option value="EUR">EUR</option>                                 
                                <option value="CHF">CHF</option>                                 
                            </select>                             
                        </li>
                        <li class="active d-inline-flex ms-2 nav-item p-0 pr-2" style="height: 2rem;">
                            <select id="languigeSelector" aria-label="Default select example" class="form-select form-select-sm w-auto"> 
                                <option value="EUR">Italian</option>                                 
                                <option value="CHF">English</option>                                 
                            </select>                             
                        </li>                         
                    </ul>                     
                </div>                 
            </nav>             
            <nav class="justify-content-center navbar navbar-expand-md sticky-top text-right" id="PrimariMenu"> 
                <div class="container-md ml-0 mr-0 pl-0 pr-0"> 
                    <a class="navbar-brand pb-0 pt-0" href="/"><img src="/img/moocloud-logo" alt="MooCloud" height="50"></a> 
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                        <svg class="svg-inline--fa fa-bars fa-w-14 fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""> 
                            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>                             
                        </svg>                         
                        <!-- <i class="fa-bars fa-lg fas"></i> -->                         
                    </button>                     
                    <div class="collapse flex-row-reverse font-weight-bolder fw-bolder navbar-collapse" id="navbarNav"> 
                        <ul class="navbar-nav"> 
                            <li class="active clearfix nav-item pl-2 pr-2 top-main-menu"> 
                                <a class="nav-link" href="/nav_pages/Managed_Hosting">Hosting Gestito</a> 
                            </li>                             
                            <li class="active clearfix nav-item pl-2 pr-2 top-main-menu"> 
                                <a class="nav-link" href="/nav_pages/Cloud_Managed">Cloud Gestito</a> 
                            </li>                             
                            <li class="active clearfix nav-item pl-2 pr-2"> 
                                <a class="nav-link" href="/nav_pages/Apps">Apps</a> 
                            </li>                             
                            <li class="nav-item pl-2 pr-2"> 
                                <a class="nav-link" href="/nav_pages/Who_we_are">Chi Siamo</a> 
                            </li>                             
                        </ul>                         
                    </div>                     
                </div>                 
            </nav>             
        </section>         
        <section data-pg-name="Page-Content" data-pgc-field="pagebody"> 
            <section data-pg-name="Apps & Scripts Hero" class="bg-light" data-pgc-define="moo.apps-hero" data-pgc-define-name="Apps Hero" data-pgc-define-description="The Hero of Apps Page"> 
                <div class="container pb-5 pt-5 text-center text-md-start"> 
                    <div class="row"> 
                        <div class="col-md-6 text-dark"> 
                            <h1 class="display-1">Apps &amp; Script</h1> 
                            <h2>Apps per gestire il tuo business a 360° da installare sul tuo Hosting Gestito e Cloud Gestito con un semplice click.&nbsp;</h2> 
                        </div>                         
                        <div class="col-md-6 order-first order-md-last text-center"> 
                            <img src="/img/Banner Condiviso dedicato 1.png" alt="" class="img-fluid" width="250px"> 
                        </div>                         
                    </div>                     
                    <div class="mb-5 row"> 
                        <div class="col-lg-3 col-md-6 mt-5"> 
                            <div class="bg-primary card h-100 text-white"> 
                                <div class="card-body"> 
                                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/condiviso gestito.svg" type="image/svg+xml"></object>                                     
                                    <h4 class="card-title i18n mt-3">Un Account</h4> 
                                    <p class="card-text">Effettua il login di tutte le app compatibili con MooCloud Single Account, con un unico nome utente e password.</p>
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="col-lg-3 col-md-6 mt-5"> 
                            <div class="bg-primary card h-100 text-white"> 
                                <div class="card-body"> 
                                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/dedicato.svg" type="image/svg+xml"></object>                                     
                                    <h4 class="card-title i18n mt-3">Auto-Config</h4> 
                                    <p class="card-text i18n">Il nostro sistema automaticamente installerà e configurerà l&apos;applicazione per essere funzionante da subito.</p> 
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="col-lg-3 col-md-6 mt-5"> 
                            <div class="bg-primary card h-100 text-white"> 
                                <div class="card-body"> 
                                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/condiviso gestito.svg" type="image/svg+xml"></object>                                     
                                    <h4 class="card-title i18n mt-3">Supporto</h4> 
                                    <p class="card-text i18n">Moltissime app offrono la possibilità di ricevere supporto direttamente da MooCloud, via email o live chat.</p> 
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="col-lg-3 col-md-6 mt-5"> 
                            <div class="bg-primary card h-100 text-white"> 
                                <div class="card-body"> 
                                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/app.svg" type="image/svg+xml"></object>                                     
                                    <h4 class="card-title i18n mt-3">1 Click Install</h4> 
                                    <p class="card-text i18n">Tutte le applicazini sono installabili con un solo click, seleziona il dominio, il server e clicca installa, il sistema farà tutto da solo.</p> 
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>
                    <div class="row"> 
                        <div class="col-md-8 col-xl-6" id="tags-container">
                            <button class="tag-btn btn btn-primary btn-sm m-1" type="button" id="all">Mostra tutto</button>                             
                        </div>                         
                    </div>                     
                </div>                 
            </section>
            <div class="" style="margin-bottom: -160px;">
                <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="d-block text-light" width="100%" height="160">
                    <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z"/>
                </svg>
            </div>             
            <section data-pg-name="Apps" title="Apps" id="appsSection"> 
</section>             
            <div class="fade modal" id="appModal" tabindex="-1" aria-labelledby="appModal" aria-hidden="true" data-pgc-define="moo.AppModal" data-pgc-define-name="App Modal"> 
                <div class="modal-dialog modal-dialog-centered"> 
                    <div class="modal-content"> 
                        <div class="modal-header"> 
                            <img src="/img/MicroICONA-mail%20-%20wordpress%20Apache%20copy.png" class="me-3 rounded-circle" height="50px" id="appModalIcon" data-pg-name="App Modal Icon"> 
                            <h5 class="modal-title" id="appModalName">Nome App</h5> 
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                             
                        </div>                         
                        <div class="modal-body"> 
                            <div> 
                                <ul class="mb-3 nav nav-pills" id="pills-tab" role="tablist"> 
                                    <li class="nav-item" role="presentation"> 
                                        <a class="active nav-link" id="pills-information-tab" data-bs-toggle="pill" href="#tab-description" role="tab" aria-controls="pills-contact" aria-selected="true">Informazioni</a> 
                                    </li>                                     
                                </ul>                                 
                                <div class="tab-content" id="pills-tabContent"> 
                                    <div class="tab-pane fade show active" id="tab-description" role="tabpanel" aria-labelledby="pills-information-tab"> 
                                        <p id="appModalDescription">OpenLiteSpeed è un Webserver ottimizato peer WordPress e
                                        Woocommerce. MooCloud offre la possibità ai suoi clienti di aggiungere opzioni
                                        al loro wordpress come la gestione o l&apos;antispam avanzato e ottimizazioni
                                        verie.</p> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" data-bs-dismiss="modal" class="btn btn-link">Chiudi</button>                             
                        </div>                         
                    </div>                     
                </div>                 
            </div>
        </section>         
        <section class="text-white" data-pg-name="Footer" style="background-color: #05004E;" data-pgc="footer"> 
            <div class="bg-white container-fluid p-0">
                <img src="/img/Footer.svg" class="img-fluid" data-pgc-field="footerimage">
            </div>
            <div class="container pt-3"> 
                <img src="/img/moocloud-logo-white" alt="MooCloud" height="50"> 
                <div class="pb-3 pt-3 row"> 
                    <div class="col-md-3"> 
                        <p>MooCloud di M.Rezzin<br>Via Novena 2<br>6500 Bellinzona</p> 
                    </div>                     
                    <div class="col-md-3"> 
                        <h5 class="ms-2">Servizi di Hosting</h5> 
                        <div role="group" aria-label="Basic example" class="btn-group-sm btn-group-vertical text-white w-100"> 
                            <a class="btn btn-link text-left text-start text-white" href="../managed-shared-cloud/">Hosting Cloud</a> 
                            <a class="btn btn-link text-left text-start text-white" href="../managed-nvme-hosting/">Cloud Gestito </a> 
                            <a class="btn btn-link text-left text-start text-white" href="../managed-vps-hosting/">Server VPS</a> 
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
        </section>
  </section>
</template>
<script>
 export default {
  head: {
    htmlAttrs: {
      lang: 'it'
    },
    title: 'Apps & Scripts | MooCloud',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'MooCloud. Il service provider svizzero più semplice e veloce' },
      { name: 'author', content: 'MooCloud' },
      { name: 'keywords', content: 'hosting provider web apps' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' },
      { rel: 'stylesheet', href: '/css/block.css' },
      { rel: 'stylesheet', href: '/css/swiperStyle.css'},
      { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css'},

    ],
    script: [
      { src: '/js/bootstrap.min.js' },
      { src: '/js/popper.js' },
      { src: '/js/currency.js' },
      { src: '/js/apps.js'},
      { src: 'https://use.fontawesome.com/releases/v5.13.1/js/all.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js', integrity:'sha512-kp7YHLxuJDJcOzStgd6vtpxr4ZU9kjn77e6dBsivSz+pUuAuMlE2UTdKB7jjsWT84qbS8kdCWHPETnP/ctrFsA==', crossorigin:'anonymous', referrerpolicy:'no-referrer'},
      { src: 'https://unpkg.com/react@17/umd/react.production.min.js'},
      { src: 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'},
      { src: 'https://unpkg.com/swiper/swiper-bundle.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/swipe/2.0.0/swipe.min.js',integrity:'sha512-xC1fS6NWgwCMJd/b5MT0Ci1DttjZ2qTxmXHQnUIyWDJddui/jiC5QwAokElrYYT9SOlK/bKMz0UBYJYi1JxdDw==', crossorigin:'anonymous',referrerpolicy:'no-referrer'}
    ],
  }
}
</script>