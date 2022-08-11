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
      <section class="header-gradient" data-pg-name="Header" style="padding-bottom: 10rem;"> 
        <div class="container-sm pb-3 pt-5"> 
          <div class="pb-4 pt-4 row text-white"> 
            <div class="col-md-8 col-xl-6 d-flex flex-column justify-content-center"> 
              <h1 class="display-1 i18n">MooCloud.<br> Il service provider svizzero più semplice e veloce<br></h1> 
              <p class="i18n w-75">Realizza e gestisci siti ultraveloci in tutta semplicità grazie al supporto costante dei nostri tecnici. Semplifica la gestione del tuo ufficio digitale e ottimizza il flusso di lavoro con MooCloud. <strong>Facile come bere un bicchiere di latte!</strong></p> 
            </div>                         
            <div class="col-md-4 col-xl-6 d-flex justify-content-center"> 
              <object type="image/svg+xml" data="/img/home%20hero%20V3.svg" class="mw-100"></object>                             
            </div>                         
          </div>                     
        </div>                 
      </section>
      <div>
        <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="d-block text-white" width="100%" height="160" style="margin-top: -160px;">
          <path d="M0 185 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 185 Z"/>
        </svg>
      </div>             
      <section data-pg-name="Main Box Section" id="moo.mainbox"> 
        <div class="container mb-5 mt-n4"> 
          <div class="bg-light border border-primary g-sm-3 home-apps-title p-3 p-md-4 pb-lg-3 pe-lg-5 ps-lg-5 pt-lg-3 rounded" style="margin-top: -5rem; position: relative;"> 
            <h2 class="display-2 i18n mb-0 mt-3 text-center">Oltre 120 applicazioni compatibili</h2>
            <h3 class="fw-light mb-4 text-center">con MooCloud Single Account</h3> 
            <div class="justify-content-center row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 text-center text-lg-start text-md-center"> 
              <div class="col col-lg-4"> 
                <h5 class="display-6 home-apps-title">Website, eShop e Blog</h5> 
                <div class="d-inline-flex home-apps-box p-2 pb-2 pe-1 ps-1 pt-2"> 
                  <div> 
                    <img src="/img/apps/wordpress.png" class="home-app-icon"/> 
                  </div>                                     
                  <!-- <div>
                      <img src="/img/apps/MatomoLogo.png"/>
                  </div> -->                                     
                  <div> 
                      <img src="/img/png/WooCommerce.png" class="home-app-icon"/> 
                  </div>
                  <div> 
                      <img src="/img/apps/grav.icon.png" class="home-app-icon"/> 
                  </div>                                     
                  <div> 
                      <img src="/img/apps/ghost2.png" class="home-app-icon"/> 
                  </div>                                     
                </div>                                 
                <p>Per migliorare la presenza online della tua organizzazione. Con un&apos;eccezionale collezione di strumenti per creare, clonare e migrare siti web.</p> 
              </div>                             
              <div class="col col-lg-4"> 
                <h2 class="display-6 home-apps-title">File e Documenti</h2> 
                <div class="d-inline-flex home-apps-box p-2 pb-2 pe-1 ps-1 pt-2"> 
                  <div> 
                    <img src="/img/apps/NextcloudMailLogo.png" class="home-app-icon"/> 
                  </div>                                     
                  <div> 
                    <img src="/img/apps/OnlyOfficeLogo.png" class="home-app-icon"/> 
                  </div>                                     
                  <div> 
                    <img src="/img/apps/CollaboraLogo.png" class="home-app-icon"/> 
                  </div>                                     
                  </div>                                 
                    <p>Condividere e sincronizzare file è un&apos;attività essenziale. Proprio per questo MooCloud offre un&apos;insieme completo di app per condividerli e lavorarci in compagnia.</p> 
              </div>                             
                  <div class="col col-lg-4"> 
                    <h2 class="display-6 home-apps-title">Email e Calendario</h2> 
                    <div class="d-inline-flex home-apps-box pb-2 pe-1 ps-1 pt-2"> 
                    <div> 
                      <img src="/img/apps/RoundCubeLogo.png" class="home-app-icon"/> 
                    </div>                                     
                    <div> 
                      <img src="/img/apps/RainloopLogo.png" class="home-app-icon"/> 
                    </div>                                     
                    <div> 
                      <img src="/img/apps/FreescoutLogo.png" class="home-app-icon"/> 
                    </div>                                     
                    <div> 
                      <img src="/img/apps/SogoLogo.png" class="home-app-icon"/> 
                    </div>                                     
                  </div>                                 
                  <p>Configurazione completa dell&apos;email pronta all&apos;uso. Gestione degli account, mailing-list, filtri per spam e client webmail.&nbsp;</p> 
                </div>                             
              </div>                         
          </div>                     
        </div>                 
      </section>             
      <section class="bg-white mt-5" data-pg-name="Titolo 2 - il massimo della tech"> 
        <div class="container"> 
          <div class="row"> 
            <div class="align-items-center d-flex flex-column mb-5 mt-5"> 
              <h2 class="display-2 i18n text-center">Il massimo della tecnologia, a disposizione di tutti, aziende o privati</h2> 
              <p class="display-4 i18n text-center w-75">Il partner affidabile per dare alla tua azienda lo slancio del quale ha bisogno. Hosting gestito, server all'avanguardia e tutto ciò che serve per fare crescere la tua presenza web.</p> 
            </div>                         
          </div>                     
        </div>                 
      </section>             
      <section data-pg-name="Card Servizi" class="mb-5"> 
        <div class="container"> 
          <div class="row"> 
            <div class="col-lg-3 col-md-6 mt-5"> 
              <div class="bg-primary card h-100 text-white"> 
                <div class="card-body"> 
                  <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/condiviso gestito.svg" type="image/svg+xml"></object>                                     
                  <h4 class="card-title i18n mt-3">Hosting Gestito </h4> 
                  <p class="card-text">Hosting Cloud Gestito, ottimizzato e con il supporto a oltre 150 App e caselle email incluse.</p>
                  <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/managed-nvme-hosting">Scopri di più &gt;</a> 
                </div>                                 
              </div>                             
            </div>                         
            <div class="col-lg-3 col-md-6 mt-5"> 
              <div class="bg-primary card h-100 text-white"> 
                  <div class="card-body"> 
                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/dedicato.svg" type="image/svg+xml"></object>                                     
                    <h4 class="card-title i18n mt-3">Cloud Dedicato</h4> 
                    <p class="card-text i18n">Cloud Dedicato completamente Gestito, ottimizzato e con staging, LDAP and ActiveDirectory.</p> 
                    <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/cloud-dedicato">Scopri di più &gt;</a> 
                  </div>                                 
                </div>                             
              </div>                         
              <div class="col-lg-3 col-md-6 mt-5"> 
                <div class="bg-primary card h-100 text-white"> 
                  <div class="card-body"> 
                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/condiviso gestito.svg" type="image/svg+xml"></object>                                     
                    <h4 class="card-title i18n mt-3">WordPress</h4> 
                    <p class="card-text i18n">Hosting WordPress Gestito, performante e ricco di funzionalità per tutti gli utenti.</p> 
                    <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/managed-nvme-hosting">Scopri di più &gt;</a> 
                  </div>                                 
                </div>                             
              </div>                         
              <div class="col-lg-3 col-md-6 mt-5"> 
                <div class="bg-primary card h-100 text-white"> 
                  <div class="card-body"> 
                    <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/app.svg" type="image/svg+xml"></object>                                     
                    <h4 class="card-title i18n mt-3">NextCloud +150 Apps</h4> 
                    <p class="card-text i18n">Oltre 150+ App ottimizzate per i nostri server. Installazione e login con un singolo clic.</p> 
                    <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/managed-nvme-hosting">Scopri di più &gt;</a> 
                  </div>                                 
                </div>                             
              </div>                         
            </div>                     
          </div>                 
      </section>
      <div>
        <svg viewBox="0 0 1440 134" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="bg-light d-block  text-white" width="100%" height="160" style="margin-top: -160px;">
          <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z"/>
        </svg>
      </div>             
      <section data-pg-name="Titolo 3 - Piattaforma Hosting" class="bg-light bot-footer-image pt-5"> 
        <div class="container"> 
          <div class="row"> 
            <div class="col-md-6"> 
                <img src="/img/Banner-Home.svg" class="w-50" style="max-width: 14rem;"> 
                <h3 class="fs-1 fw-bolder i18n mt-3">La piattaforma di hosting agile come il tuo business</h3> 
                <p class="display-4 i18n pt-3">Veloce, sicuro e facile da usare, con la migliore assistenza. Trova la pace dei sensi con MooCloud.</p> 
            </div>                         
            <div class="col-md-6"> 
                <div> 
                  <h5><b class="i18n">Velocità leggendaria</b></h5> 
                  <p class="i18n">Grazie alla nostra cache a più livelli, il primo basato su Redis e il secondo sfruttando le funzionalità avanzate del web-server Nginx. I nostri server riescono a risparmiare risorse e aumentare la velocità del tuo sito.</p> 
                </div>                             
                <div> 
                  <h5><b class="i18n">Sicuramente Svizzero</b></h5> 
                  <p class="i18n">Sicurezza, privacy ed efficienza sono nel DNA di MooCloud: dai nostri tecnici e assistenti fino ai nostri server.</p> 
                </div>                             
                <div> 
                  <h5><b class="i18n">Tecnologia più moderna</b></h5> 
                  <p class="i18n">Grazie a Docker Container, ogni sito, app o software sono isolati uno da altro. Questo garantisce un livello di protezione altissimo e permette di mantenere i software aggiornati e sicuri.</p> 
                </div>                             
                <div> 
                  <h5><b class="i18n">Assistenza a 360°</b></h5> 
                  <p class="i18n">Il nostro team di tecnici risponde immediatamente alle richieste di assistenza nella tua lingua guidandoti alla soluzione. Se non hai il tempo o la possibilità di lavorare sul tuo sito, puoi facilmente prenotare un intervento di un nostro assistente che farà per te le modifiche necessarie.</p> 
                </div>                             
            </div>                         
          </div>                     
        </div>                 
      </section>
      <div style="margin-bottom: -160px;">
        <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" class="bg-light d-block text-white" width="100%" height="160">
          <path d="M0 185 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 185 Z"/>
        </svg>
      </div>
      <section data-pg-name="Titolo 3 - WordPress Gestito Super Veloce" class="pb-5 pt-5"> 
        <div class="container mt-4"> 
          <div class="row"> 
            <div class="col-md-6"> 
              <div> 
                <h5 data-pgc-edit="titolo"><b class="i18n">Oltre 120 App compatibili</b></h5> 
                <p data-pgc-edit="testo" class="i18n">Installa e autoconfigura con un semplice click oltre 120 app compatibili con la funzione Single Account, in meno di 1 minuto potrai accedere alle app, con il tuo account senza dover perdere tempo in configurazioni.</p> 
              </div>                             
              <div> 
                <h5 data-pgc-edit="titolo"><span class="badge float-right ps-0 text-primary" style="font-size: 0.8rem;">Closed Beta</span><b class="i18n">2FA e SSO</b></h5> 
                <p data-pgc-edit="testo" class="i18n">Imposta l&apos;autenticazione a 2 Fattori per migliorare la sicurezza delle tue applicazioni, il supporto per MooCloud SSO è attualmente in Beta, ma vi permetterà di non dover inserire le vostre credenziali per ogni applicazione, ma potrete fare il login con un solo click.&nbsp;</p> 
              </div>                             
              <div style="text-align: left;"> 
                <h5 data-pgc-edit="titolo"><b class="i18n">Open Standards</b></h5> 
                <p data-pgc-edit="testo" class="i18n">La vasta compatibilità di MooCloud Single Account è dovuta al uso del protocollo OpenLDAP, questo vi permette di rimanere im possesso dei vostri dati e vi permette di integrare anche applicazioni esterne.&nbsp;</p> 
              </div>
              <div style="text-align: left;"> 
                <h5 data-pgc-edit="titolo"><b class="i18n">∞ Email 1 Password</b></h5> 
                <p data-pgc-edit="testo" class="i18n">Una Password per tutti i tuoi account email, e un email con molte password, potrai con il tuo Single Account accedere a tutti i tuoi account mail e ogni membro di un email condivisa potrà accedere alla casella con la sua password personale, condividere le password e cosa del passato.&nbsp;</p> 
              </div>                                                          
            </div>                         
            <div class="align-items-end col-md-6 flex-column justify-content-center order-first order-md-last text-left text-md-right"> 
              <img src="/img/png/Banner%20Mail%203.png" class="img-fluid w-50" data-pgc-edit="immagine"> 
              <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">Signle Account</h3> 
              <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">Un Email, Una Password, Un Username per Tutte le tue Applicazioni; non ti serve più impostare una password per ogni applicazione, tutte usano la stessa in automatico.&nbsp;<br></p> 
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
              <a class="btn btn-link text-left text-start text-white" href="managed-shared-cloud/">Hosting Cloud</a> 
              <a class="btn btn-link text-left text-start text-white" href="managed-nvme-hosting/">Cloud Gestito </a> 
              <a class="btn btn-link text-left text-start text-white" href="managed-vps-hosting/">Server VPS</a> 
            </div>                         
          </div>                     
        </div>                 
      </div>             
    </section>
  </section>
</template>