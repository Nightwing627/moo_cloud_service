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
            <section data-pg-name="Chi Siamo" title="chi-siamo"> 
                <div class="container mt-5 text-center"> 
                    <div> 
                        <h1 class="display-1">Servizio Cloud per Tutti</h1> 
                        <h4 class="display-4">Il Cloud deve essere accessibile a tutti,<br>questo è il nostro obiettivo<br>e questo è quello che facciamo.</h4> 
                    </div>                     
                    <img src="/img/MockUp_Chi%20siamo%20copy-03.svg" class="mx-n5 my-3"/> 
                    <div> 
                        <h2>Il Cloud Svizzero</h2> 
                        <h5>Per MooCloud essere Svizzeri significa essere affidabili, puntuali e <br>orientati alla privacy del cliente a 360°.</h5> 
                    </div>                     
                </div>                 
            </section>             
            <section class="bg-light mt-5 py-5" data-pg-name="about-us-info"> 
                <div class="container "> 
                    <div class="row"> 
                        <div class="col-md-4"> 
                            <div class="d-flex justify-content-center w-100"> 
                                <img src="/img/png/Banner%20Condiviso%20dedicato%201.png" width="150"> 
                            </div>                             
                            <h3 class="display-3 i18n">Semplice come una fattoria</h3> 
                            <p class="i18n">Nel mondo dell&rsquo;hosting e dei server, più un servizio è potente e più e complicato. Noi di MooCloud abbiamo deciso di ribaltare questa costante. Offriamo servizi al massimo delle performance ma di facile utilizzo per il cliente perché ci siamo occupati noi di tutti gli aspetti tecnici.</p> 
                        </div>                         
                        <div class="col-md-4"> 
                            <div class="d-flex justify-content-center w-100"> 
                                <img src="/img/png/Banner%20Mail%203.png" width="150"> 
                            </div>                             
                            <h3 class="display-3 i18n">Tutto ciò che serve a un azienda</h3> 
                            <p class="i18n">MooCloud è sempre alla ricerca delle tecnologie più innovative per offrire servizi sempre più veloci e performanti consapevoli che l&rsquo;innovazione tecnologica dei nostri prodotti si riflette nella possibilità di innovare che diamo ai nostri clienti. Con MooCloud il tuo sito e i tuoi servizi informatici diventano più veloci ed efficienti.</p> 
                        </div>                         
                        <div class="col-md-4"> 
                            <div class="d-flex justify-content-center w-100"> 
                                <img src="/img/png/Banner%20HOSTING%20CONDIVISO%203.png" width="150"> 
                            </div>                             
                            <h3 class="display-3 i18n">Il supporto&nbsp;</h3> 
                            <p class="i18n">Gli affidabili server di MooCloud raggiungono tempi di uptime fino al 99.99% su alcuni servizi e del 99.98% su tutto il resto, questo combinato con supporto via LiveChat, mail e telefono vi offrono una sicurezza e una qualità di servizio superiore.&nbsp;</p> 
                        </div>                         
                    </div>                     
                </div>                 
            </section>
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
    title: 'Chi Siamo | MooCloud',
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