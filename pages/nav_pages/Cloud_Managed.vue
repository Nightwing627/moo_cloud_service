
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
        <section data-pgc-field="pagebody">            
            <section class="bg-light pb-5 pt-5" data-pg-name="Titolo 1- Cloud managed"> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-md-6"> 
                            <h1 class="display-1 i18n text-capitalize" data-pgc-edit="Titolo pagina">Cloud Dedicato</h1> 
                            <h2 class="display-2 i18n" data-pgc-edit="sottotitolo pagina">Quando al tuo server serve qualcosa in più.</h2>
                            <h4 class="display-4 i18n" data-pgc-edit="sottotitolo pagina">Risorse dedicate, per eshop e portali bisognosi di potenza di calcolo.&nbsp;</h4> 
                            <p class="fs-5 mb-0">Ogni server può ospitare illimitatamente:</p>
                            <div class="d-flex justify-content-start ">
                                <div class="align-items-center d-inline-flex pe-3">
                                    <div>
                                        <img src="/img/png/MicroICONA-tecnologie%202.png" width="50px"/>
                                    </div>
                                    <p class="mb-0"><b></b> Apps</p>
                                </div>
                                <div class="align-items-center d-inline-flex pe-3">
                                    <div>
                                        <img src="/img/png/MicroICONA-tecnologie%206.png" width="50px"/>
                                    </div>
                                    <p class="mb-0"><b></b> Users</p>
                                </div>
                                <div class="align-items-center d-inline-flex pe-3">
                                    <div>
                                        <img src="/img/png/MicroICONA-tecnologie%203.png" width="50px"/>
                                    </div>
                                    <p class="mb-0"> Domain</p>
                                </div>
                            </div>
                            <p class="fw-lighter" style="font-size: 0.8rem;">Scopri le funzioni di <b>EasyManager PRO</b>.</p>
                        </div>                         
                        <div class="col-md-6 d-flex justify-content-center justify-content-md-end"> 
                            <img src="/img/dedicato-new-animata.svg" width="250" class="float-right" data-pgc-edit="immagine"> 
                        </div>                         
                    </div>                     
                </div>                 
            </section>
            <div style="margin-bottom: -160px;">
                <svg viewBox="0 0 1440 134" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="bg-white d-block text-light" width="100%" height="160">
                    <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z"/>
                </svg>
            </div>             
            <section class="pb-2"> 
                <div id="plans-container">
                    <div class="mt-5 p-5">
                        <p class="display-4 pb-5 pt-5 text-center">Caricamento Prodotti ...</p>
                    </div>                     
                </div>                 
            </section>             
            <section data-pg-name="Piano Personalizato" class="mb-5 mt-5"> 
                <div class="container pl-4 pr-4"> 
                    <div class="bg-white border border-primary justify-content-center position-relative rounded row"> 
                        <div class="col-md-10 col-sm-11 col-xl-8 p-2 text-center"> 
                            <h3></h3> 
                            <h3 data-pgc-edit="testo" class="i18n">Cloud Gestito o <a href="/managed-nvme-hosting" class="text-body text-decoration-none">Hosting Gestito</a>?</h3> 
                            <p data-pgc-edit="sotto testo " class="i18n">Un&apos;istanza di Cloud Gestito è ospitata su server con processori con clock superiori che quindi permettono migliori risultati in applicazioni con processi molto intensi. Inoltre le risorse non sono condivise ma sono 100% dedicate, questo permette di avere selpre il 100% delle performace.</p> 
                        </div>                         
                    </div>                     
                </div>                 
            </section>
            <div>
                <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="bg-light d-block text-white" width="100%" height="160" style="margin-top: -160px;">
                    <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z"/>
                </svg>
            </div>             
            <section data-pg-name="Titolo 2 -Caratteristiche del Hosting Cloud" class="bg-light  pb-5 pt-5"> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-md-6"> 
                            <img src="/img/condiviso%20gestito.svg" class="img-fluid w-50"> 
                            <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">Hosting WooCommerce</h3> 
                            <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">Hosting Cloud ottimiazto per WooCommerce e Eshop. Con Nginx FastCGI cache e Redis Object Cache gli store online possono contare su ottime prestazioni.</p> 
                        </div>                         
                        <div class="col-md-6"> 
                            <div> 
                                <h5><b data-pgc-edit="titolo" class="i18n">Cache su misura</b></h5> 
                                <p data-pgc-edit="testo">Grazie alla Cache su più livelli e al Nginx Proxy i nostri server sono ottimizati per offrire massime performance anche sotto stress grazie alla assegnazione delle risorse per singolo software.&nbsp;</p> 
                            </div>                             
                            <div> 
                                <h5><b data-pgc-edit="titolo" class="i18n">Ottimizato per l'ecommerce</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">La cache a più livelli, i core dedicati e i dischi NVMe SSD formano la migliore base per ospitare Hosting WooCommerce o Ecommerce in generale. Inoltre potete sfruttare le ottimizazioni mirate fatte alla piattaforma per dare il meglio come Hosting WooCommerce.&nbsp;</p> 
                            </div>                             
                            <div> 
                                <h5><b data-pgc-edit="titolo" class="i18n">Massima Sicurezza</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">L&apos;isolazione di ogni software e app in un Docker Container permette di offrire Cloud Hosting con un livello elevato di sicurezza, anche quando si hanno molte app.&nbsp;</p> 
                            </div>                             
                            <div> 
                                <h5><b data-pgc-edit="titolo" class="i18n">Certificato SSL e PCI DSS</b></h5> 
                                <p class="i18n mb-2" data-pgc-edit="testo">Il certificato SSL gratuito di Let&apos;secncrypt viene creato automaticamente senza che sia necessario un vostro intervento per offrire al vostro Ecommerce una protezione in più.</p> 
                            </div>                             
                        </div>                         
                    </div>                     
                </div>                 
            </section>
            <div style="margin-bottom: -160px;">
                <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="d-block text-light" width="100%" height="160">
                    <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z"/>
                </svg>
            </div>             
            <section data-pg-name="Titolo 3 - WordPress Gestito Super Veloce" class="bg-white pb-5 pt-5"> 
                <div class="container position-relative"> 
                    <div class="row"> 
                        <div class="col-md-6"> 
                            <div> 
                                <h5 data-pgc-edit="titolo"><span class="badge badge-primary float-right text-primary" style="font-size: 0.8rem;">Open Beta</span><b class="i18n">Ottimizzato per WordPress</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">Ogni installazione di WordPress verrà dotata di Nginx e FastCGI cache, una combinazione stabile e performante che vi offre senza configurazioni ottime prestazioni e un eccellente compatibilità con WordPress e WooCommerce.</p> 
                            </div>                             
                            <div> 
                                <h5 data-pgc-edit="titolo"><span class="badge badge-primary float-right text-primary" style="font-size: 0.8rem;">Open Beta</span><b class="i18n">RamDisk Cache</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">I nostri offrono la possibiltià di dedicare parte della ram del vostro server come cache del vostro sito, questo riduce i tempi di caricamento e aumenta la reattività del vostro wordpress.</p> 
                            </div>                             
                            <div style="text-align: left;"> 
                                <h5 data-pgc-edit="titolo"><span class="badge badge-info float-right text-primary visually-hidden" style="font-size: 0.8rem;">Open Beta</span><b class="i18n">Divi Builder</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">Incluso anche il Divi Builder. di Eleganthemes che vi permette di costruire velocemente ottimi WooCommerce, ottimizati per rapidità di caricamento e con un design accattivamente.</p> 
                            </div>                             
                            <div> 
                                <h5 data-pgc-edit="titolo"><b class="i18n">Redis Cache</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">Redis è un DataBase estremamente veloce che MooCloud utilizza per rendere i vostri E-Shop e Blog ultra veloci.</p> 
                            </div>                             
                        </div>                         
                        <div class="align-items-end col-md-6 flex-column justify-content-center text-left text-md-right"> 
                            <img src="/img/Banner%20Condiviso%20dedicato%201.png" class="img-fluid w-50" data-pgc-edit="immagine"> 
                            <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">150+ Apps e Custom Apps</h3> 
                            <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">A portata di un semplice click, MooCloud mette a disposizione tecnologie avanzate, spesso offerte solo a utenti esperti.</p> 
                        </div>                         
                    </div>                     
                </div>                 
            </section>             
            <div>
                <svg viewBox="0 0 1440 134" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="bg-light d-block text-white" width="100%" height="160" style="margin-top: -160px;">
                    <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z"/>
                </svg>
            </div>
            <section data-pg-name="Titolo 4 - Perché un Hosting Gestito" class="bg-light pt-5"> 
                <div class="container"> 
                    <div class="pb-5 row"> 
                        <div class="col-md-6"> 
                            <img src="/img/Banner-Home.svg" class="img-fluid w-50" data-pgc-edit="immagine"> 
                            <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">Perché un <br>Hosting Gestito</h3> 
                            <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">Un sito aggiornato è un sito più sicuro e veloce. Se non hai tempo di farlo, ci pensiamo noi!</p> 
                        </div>                         
                        <div class="col-md-6 "> 
                            <div> 
                                <h5 data-pgc-edit="titolo"><b class="i18n">Aggiornamenti Gestiti</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">Prima di qualsiasi aggiornamento i nostri server fanno un backup automatico. Se l'aggiornamento non riesce al 100% si può recuperare la funzionalità del sito in pochi secondi ripristinando il backup precedente.</p> 
                            </div>                             
                            <div> 
                                <h5 data-pgc-edit="titolo"><b class="i18n">Sicurezza Avanzata</b></h5> 
                                <p data-pgc-edit="testo" class="i18n">Ogni App compatibile (con il protocollo LDAP) può usare il sistema di autentificazione del server e per aumentare la protezione ogni app, può essere assegnata a uno o più utenti o gruppi a cui garantire l'accesso, oppure è possibile impostare l'accesso trammite una Password al URL o al Dominio assegnato a una determinata App.<br></p> 
                            </div>                             
                            <div> 
                                <h5 data-pgc-edit="titolo"><b class="i18n">Isolazione Docker</b></h5> 
                                <p data-pgc-edit="" class="i18n">Grazie a Docker Container, ogni sito, app o software sono isolati l'uno dall'altro. Questo garantisce un livello di protezione altissimo e permette di mantenere i software aggiornati e sicuri.</p> 
                            </div>                             
                            <div> 
                                <h5 data-pgc-edit="titolo"><b class="i18n">BackUp Gestiti</b></h5> 
                                <p class="i18n">Il tuo sito incluce un sistema di backup incrementale che ti permette di mantenere una copia del tuo server al sicuro per i successivi 7 giorni, il tutto avviene in maniera completamente automatica.<br>Qualora invece ci siano aggiornamenti massivi il nostro sistema effettuerà uno Snapshot della macchina prima di eseguirlo, così da poter tornare online in pochi istanti qualora quelacosa dovesse fallire.&nbsp;</p> 
                            </div>                             
                        </div>                         
                    </div>                     
                </div>                 
            </section>
            <div class="">
                <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="d-block text-light" width="100%" height="160" style="margin-bottom: -140px;">
                    <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z"/>
                </svg>
            </div>             
            <section data-pg-name="Tecnologie e Strumenti per te" class=""> 
                <div class="container mb-5 "> 
                    <div class="bg-white border border-primary justify-content-center  position-relative row"> 
                        <div class="col-md-10 col-sm-11 col-xl-8 p-2 text-center"> 
                            <h3></h3> 
                            <h3 class="i18n">Tecnologie e Strumenti per te</h3> 
                            <p class="i18n">Il prodotto adatto alla tua esigenza</p> 
                            <div class="row text-left"> 
                                <div class="col-md-4"> 
                                    <div i18next-orgval-1=" " i18next-orgval-3=" " i18next-orgval-5=" " i18next-orgval-7=" " localized=""> 
                                        <img src="/img/png/MicroICONA-tecnologie%201.png" width="50" localized=""> 
                                        <h5 class="i18n">Divi Builder</h5> 
                                        <p class="i18n">Oltre 1200 Layout e 170 Temi pronti al uso.&nbsp;</p> 
                                    </div>                                     
                                    <div i18next-orgval-1=" " i18next-orgval-3=" " i18next-orgval-5=" " i18next-orgval-7=" " localized=""> 
                                        <img src="/img/png/MicroICONA-tecnologie%204.png" width="50" localized=""> 
                                        <h5 class="i18n">Germania, Fillandia o US?</h5> 
                                        <p class="i18n">Scegli tu dove ospitare il tuo sito, senza sovrapprezzo.</p> 
                                    </div>                                     
                                </div>                                 
                                <div class="col-md-4"> 
                                    <div> 
                                        <img src="/img/png/MicroICONA-tecnologie%202.png" width="50"> 
                                        <h5 class="i18n">Xeon Gold o Epyc 2</h5> 
                                        <p class="i18n">Usiamo soltanto i processori più veloci e aggiornati.</p> 
                                    </div>                                     
                                    <div> 
                                        <img src="/img/png/MicroICONA-tecnologie%205.png" width="50"> 
                                        <h5 class="i18n">Backup Incrementali</h5> 
                                        <p class="i18n">Backup su server esterno, per essere al sicuro.&nbsp;</p> 
                                    </div>                                     
                                </div>                                 
                                <div class="col-md-4"> 
                                    <div> 
                                        <img src="/img/png/MicroICONA-tecnologie%203.png" width="50"> 
                                        <h5 class="i18n">Solo DDR4</h5> 
                                        <p class="i18n">Una RAM di ultima generazione rende il sito più rapido.</p> 
                                    </div>                                     
                                    <div> 
                                        <img src="/img/png/MicroICONA-tecnologie%206.png" width="50"> 
                                        <h5 class="i18n">One click login</h5> 
                                        <p class="i18n">Fai il login nel tuo sito WordPress senza digitare una password.</p> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
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
</template><script>
  module.exports = {
  head: {
    htmlAttrs: {
      lang: 'it'
    },
    title: 'Cloud Gestito',
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
      { src: '/js/app.js'},
      { src: 'https://use.fontawesome.com/releases/v5.13.1/js/all.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js', integrity:'sha512-kp7YHLxuJDJcOzStgd6vtpxr4ZU9kjn77e6dBsivSz+pUuAuMlE2UTdKB7jjsWT84qbS8kdCWHPETnP/ctrFsA==', crossorigin:'anonymous', referrerpolicy:'no-referrer'},
      { src: 'https://unpkg.com/react@17/umd/react.production.min.js'},
      { src: 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'},
      { src: 'https://unpkg.com/swiper/swiper-bundle.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/swipe/2.0.0/swipe.min.js',integrity:'sha512-xC1fS6NWgwCMJd/b5MT0Ci1DttjZ2qTxmXHQnUIyWDJddui/jiC5QwAokElrYYT9SOlK/bKMz0UBYJYi1JxdDw==', crossorigin:'anonymous',referrerpolicy:'no-referrer'}
    ]
  }
}
</script>
