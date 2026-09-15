(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`

  <section id="projects" style="background:var(--surface)">
    <div class="section-wrap">
      <div class="section-header">
        <h2 class="section-title">Projects</h2>
        <div class="section-line"></div>
      </div>
      <div class="projects-grid">


       <div class="project-card">
          <div class="project-num">project_01</div>
          <div class="project-title">Codenames Turing Test</div>
          <div class="project-desc">A self guided research study involving the board game codenames.</div>
          <div class="project-tags">
            <span class="project-tag tag-react">Go</span>
            <span class="project-tag tag-vite">Svlete</span>
            <span class="project-tag tag-vite">Vite</span>
            <span class="project-tag tag-js">Ollama</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/abramceastham-byte/ai_codenames" class="project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-num">project_02</div>
          <div class="project-title">SkillTape App</div>
          <div class="project-desc">A self hosted study application for managing and tracking learning progress.</div>
          <div class="project-tags">
            <span class="project-tag tag-react">React</span>
            <span class="project-tag tag-vite">Vite</span>
            <span class="project-tag tag-js">SQLite</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/EthanC306/SkillTape.git" class="project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>

       
        <div class="project-card">
          <div class="project-num">project_03</div>
          <div class="project-title">OU Dining Tracker</div>
          <div class="project-desc">A Vite/React website for tracking Ohio University dining hall menus. Features Tailwind CSS styling, Git collaboration workflow, and real-time menu browsing.</div>
          <div class="project-tags">
            <span class="project-tag tag-react">React</span>
            <span class="project-tag tag-vite">Vite</span>
            <span class="project-tag tag-js">Tailwind CSS</span>
          </div>
          <div class="project-links">
            <a href="Dining Tracker Preview.png" class="project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Preview
            </a>
          </div>
        </div>


        <div class="project-card">
          <div class="project-num">project_04</div>
          <div class="project-title">Focus Timer App</div>
          <div class="project-desc">A deployed Pomodoro-style focus timer built with Vite and React. Configured for GitHub Pages deployment with custom base path setup and clean UX.</div>
          <div class="project-tags">
            <span class="project-tag tag-react">React</span>
            <span class="project-tag tag-vite">Vite</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/EthanC306/Focus-Tracking-Timer.git" class="project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
            <a href="https://ethanc306.github.io/Focus-Tracking-Timer/" class="project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live
            </a>
          </div>
        </div>


         <div class="project-card more-card">
          <div style="text-align:center;color:var(--muted)">
            <div style="font-size:36px;margin-bottom:14px;opacity:.25">+</div>
            <div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase">More coming soon</div>
          </div>
        </div>
        

         


      </div>
    </div>
  </section>

`;function t(){let t=document.querySelector(`#projects-mount`);if(!t){console.warn(`mountProjects: #projects-mount not found in index.html`);return}t.outerHTML=e}async function n(e,t=fetch){if(globalThis.location?.protocol===`file:`)throw Error(`Open the site through its web address or local development server before sending a message.`);let n=new AbortController,r=setTimeout(()=>n.abort(),2e4);try{let r=await t(`https://formsubmit.co/ajax/ec036824@ohio.edu`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({name:e.name.trim(),email:e.email.trim(),message:e.message.trim(),_subject:`Portfolio: ${e.subject.trim()}`,_replyto:e.email.trim()}),signal:n.signal}),i;try{i=await r.json()}catch{throw Error(`The email service returned an unexpected response (HTTP ${r.status}). Please try again later or use the email link above.`)}if(!r.ok||![!0,`true`].includes(i?.success)){let e=typeof i?.message==`string`?i.message.trim().slice(0,500):``;throw Error(e?`Email service: ${e}`:`The email service rejected the message (HTTP ${r.status}). Please try again later or use the email link above.`)}}catch(e){throw n.signal.aborted?Error(`The email service took too long to respond. Delivery is unconfirmed. Please try again later or use the email link above.`):e instanceof TypeError?Error(`Could not connect to the email service. Check your connection and whether your browser is blocking formsubmit.co, or use the email link above.`):e}finally{clearTimeout(r)}}function r(){let e=document.getElementById(`contact-dialog`),t=document.getElementById(`contact-email`),r=document.getElementById(`contact-form`),i=document.getElementById(`contact-status`),a=r.querySelector(`button[type="submit"]`);t.addEventListener(`click`,t=>{t.preventDefault(),e.showModal()}),e.querySelector(`.contact-close`).addEventListener(`click`,()=>e.close()),e.addEventListener(`click`,t=>{let n=e.getBoundingClientRect();t.target===e&&(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)&&e.close()}),e.addEventListener(`close`,()=>t.focus()),r.addEventListener(`submit`,async e=>{if(e.preventDefault(),a.disabled)return;let t=Object.fromEntries(new FormData(r));if(Object.values(t).some(e=>!e.trim())){i.textContent=`Please fill in every field before sending.`;return}a.disabled=!0,a.textContent=`Sending…`,r.setAttribute(`aria-busy`,`true`),i.textContent=``;try{await n(t),i.textContent=`Your message was submitted. Thanks for reaching out!`,r.reset()}catch(e){i.textContent=`${e.message} Your draft is still in this form.`}finally{a.disabled=!1,a.textContent=`Send message`,r.removeAttribute(`aria-busy`)}})}t(),r();