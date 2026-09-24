import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=`<!doctype html>
<html lang="en">
  <head>
    <script src="/theme.js"><\/script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Vocabite — A little pocket. A world of words.</title>
    <meta
      name="description"
      content="Discover English words, save them to your Pocket, and practice with Vocabite. Start free on the web. Coming soon to Google Play."
    />
    <meta name="theme-color" content="#1a6fe8" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --blue: #1a6fe8;
        --ink: #1a1a2e;
        --muted: #59667b;
        --line: #d5e4f7;
        --pale: #e8f1fd;
        --yellow: #ffe27a;
      }
      * {
        box-sizing: border-box;
      }
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 28px;
      }
      body {
        margin: 0;
        background: #f8fbff;
        color: var(--ink);
        font:
          15px/1.75 Poppins,
          system-ui,
          sans-serif;
      }
      a {
        color: var(--blue);
        text-underline-offset: 4px;
      }
      button {
        font: inherit;
      }
      a:focus-visible,
      button:focus-visible,
      summary:focus-visible {
        outline: 3px solid var(--blue);
        outline-offset: 5px;
      }
      .wrap {
        max-width: 1160px;
        margin: auto;
        padding: 0 28px;
      }
      .nav {
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 24px;
        font-weight: 800;
        text-decoration: none;
        letter-spacing: -1px;
      }
      .brand img {
        width: 42px;
        height: 42px;
        object-fit: contain;
      }
      .nav-links {
        display: flex;
        align-items: center;
        gap: 28px;
      }
      .nav-links a {
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        color: var(--muted);
      }
      .nav-links .login {
        color: var(--blue);
        padding: 10px 19px;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: white;
      }
      .hero {
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        align-items: center;
        gap: 64px;
        padding: 66px 0 85px;
      }
      .eyebrow {
        color: var(--blue);
        font-size: 11px;
        letter-spacing: 1.8px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--pale);
        padding: 7px 13px;
        border-radius: 30px;
        letter-spacing: 0.4px;
      }
      .dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--blue);
      }
      h1 {
        font-size: clamp(39px, 4.7vw, 60px);
        line-height: 1.15;
        letter-spacing: -2.5px;
        margin: 22px 0;
      }
      h1 span {
        color: var(--blue);
      }
      .lead {
        color: var(--muted);
        max-width: 490px;
        font-size: 16px;
      }
      .actions {
        display: flex;
        gap: 12px;
        align-items: stretch;
        flex-wrap: wrap;
        margin: 28px 0 13px;
      }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
        background: var(--blue);
        color: white;
        text-decoration: none;
        border: 0;
        border-radius: 14px;
        padding: 14px 22px;
        font-size: 14px;
        font-weight: 600;
        min-height: 58px;
        box-shadow: 0 7px 18px #1a6fe81c;
      }
      .button:hover {
        background: #1558c0;
      }
      .store {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        text-align: left;
        border: 1px solid var(--line);
        border-radius: 14px;
        background: white;
        color: #526177;
        padding: 9px 18px;
        cursor: not-allowed;
      }
      .store svg {
        width: 23px;
        height: 26px;
      }
      .store small {
        display: block;
        font-size: 10px;
        line-height: 1.4;
      }
      .store strong {
        font-size: 15px;
        line-height: 1.5;
      }
      .note {
        font-size: 12px;
        color: var(--muted);
      }
      .scene {
        position: relative;
        min-height: 425px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .halo {
        position: absolute;
        width: 390px;
        height: 390px;
        max-width: 100%;
        border-radius: 50%;
        background: var(--pale);
        border: 28px solid #f0f6ff;
      }
      .word-card {
        position: relative;
        width: 310px;
        background: white;
        padding: 29px;
        border: 1px solid var(--line);
        border-radius: 26px;
        box-shadow: 0 22px 65px #1a6fe819;
        transform: rotate(-4deg);
      }
      .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--muted);
        font-size: 11px;
      }
      .tag {
        padding: 3px 10px;
        background: var(--pale);
        color: var(--blue);
        border-radius: 20px;
        font-weight: 600;
      }
      .word-card h2 {
        font-size: 35px;
        letter-spacing: -1px;
        margin: 23px 0 0;
      }
      .word-card p {
        margin: 6px 0;
        font-size: 13px;
        color: var(--muted);
      }
      .word-card .translation {
        font-size: 18px;
        font-weight: 600;
        color: var(--ink);
        margin-top: 18px;
      }
      .example {
        border-top: 1px solid var(--line);
        padding-top: 16px;
        margin-top: 20px !important;
      }
      .mascot {
        position: absolute;
        width: 170px;
        height: 170px;
        object-fit: contain;
        bottom: -17px;
        right: -5px;
        filter: drop-shadow(0 9px 12px #1a6fe815);
      }
      .floating {
        position: absolute;
        right: 0;
        top: 10px;
        transform: rotate(5deg);
        background: var(--yellow);
        padding: 10px 17px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }
      .scene-label {
        position: absolute;
        bottom: -25px;
        left: 16px;
        font-size: 10px;
        color: var(--muted);
      }
      .section {
        padding: 80px 0;
      }
      .section-heading {
        max-width: 590px;
        margin-bottom: 32px;
      }
      h2 {
        font-size: clamp(26px, 3vw, 36px);
        line-height: 1.3;
        letter-spacing: -1px;
        margin: 10px 0 16px;
      }
      .section-heading p,
      .feature p {
        color: var(--muted);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
      }
      .feature {
        background: white;
        border: 1px solid var(--line);
        border-radius: 22px;
        padding: 28px;
      }
      .feature h3 {
        font-size: 18px;
        margin: 0 0 12px;
      }
      .feature p {
        font-size: 13px;
        margin: 0;
      }
      .pocket-panel {
        background: var(--blue);
        border-radius: 30px;
        padding: 45px 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: center;
        color: white;
      }
      .pocket-panel .eyebrow {
        color: var(--yellow);
      }
      .pocket-panel p {
        font-size: 14px;
        color: #e6efff;
      }
      .plans {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .plan {
        border: 1px solid #ffffff40;
        background: #ffffff0f;
        border-radius: 20px;
        padding: 22px 18px;
      }
      .plan strong {
        display: block;
        font-size: 28px;
        letter-spacing: -1px;
      }
      .plan small {
        font-size: 11px;
      }
      .plan .plan-name {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 18px;
      }
      .plan.premium {
        background: var(--yellow);
        color: var(--ink);
        border-color: var(--yellow);
      }
      .faq {
        max-width: 780px;
        margin: 0 auto;
      }
      .faq .section-heading {
        text-align: center;
        margin: 0 auto 30px;
      }
      details {
        border-bottom: 1px solid var(--line);
        padding: 20px 2px;
      }
      summary {
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
      }
      details p {
        font-size: 13px;
        color: var(--muted);
        padding-right: 20px;
      }
      .download {
        background: var(--pale);
        border-radius: 28px;
        padding: 40px;
        text-align: center;
      }
      .download p {
        color: var(--muted);
        font-size: 14px;
        max-width: 540px;
        margin: 0 auto;
      }
      .download .actions {
        justify-content: center;
        margin-bottom: 0;
      }
      .footer {
        margin-top: 65px;
        border-top: 1px solid var(--line);
        padding: 32px 0;
      }
      .footer-top {
        display: flex;
        justify-content: space-between;
        gap: 28px;
        align-items: start;
      }
      .footer-links {
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
      }
      .footer-links a {
        font-size: 11px;
        color: var(--muted);
      }
      .footer p {
        font-size: 11px;
        color: var(--muted);
      }
      @media (max-width: 800px) {
        .hero {
          gap: 25px;
          grid-template-columns: 1fr 1fr;
        }
        .scene {
          min-height: 390px;
        }
        .word-card {
          width: 260px;
          padding: 22px;
        }
        .mascot {
          width: 130px;
          height: 130px;
        }
        .grid {
          gap: 12px;
        }
        .feature {
          padding: 20px;
        }
        .pocket-panel {
          padding: 32px;
          gap: 25px;
        }
      }
      @media (max-width: 600px) {
        .wrap {
          padding: 0 22px;
        }
        .nav {
          min-height: 80px;
        }
        .nav-links {
          gap: 12px;
        }
        .nav-links .feature-link {
          display: none;
        }
        .brand {
          font-size: 22px;
        }
        .hero {
          grid-template-columns: 1fr;
          padding: 30px 0 60px;
          gap: 26px;
        }
        h1 {
          font-size: 44px;
        }
        .lead {
          font-size: 14px;
        }
        .scene {
          min-height: 355px;
          max-width: 360px;
          width: 100%;
          margin: auto;
        }
        .halo {
          width: 310px;
          height: 310px;
        }
        .word-card {
          width: 270px;
        }
        .mascot {
          width: 140px;
          height: 140px;
          bottom: 0;
        }
        .floating {
          top: 0;
        }
        .scene-label {
          bottom: -12px;
        }
        .section {
          padding: 52px 0;
        }
        .grid,
        .pocket-panel {
          grid-template-columns: 1fr;
        }
        .feature {
          padding: 25px;
        }
        .pocket-panel {
          padding: 28px 22px;
          gap: 18px;
          border-radius: 24px;
        }
        .plan {
          padding: 18px 13px;
        }
        .plan strong {
          font-size: 25px;
        }
        .download {
          padding: 30px 20px;
        }
        .footer-top {
          flex-direction: column;
        }
        .footer-links {
          gap: 12px 18px;
        }
        .button,
        .store {
          flex: 1;
          white-space: nowrap;
        }
        .actions {
          gap: 10px;
        }
        .button {
          padding: 13px 16px;
          font-size: 13px;
        }
        .store {
          padding: 9px 13px;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
      @media (max-width: 360px) {
        .nav { gap: 10px; }
        .brand { font-size: 20px; gap: 6px; }
        .brand img { width: 32px; height: 32px; }
        .nav-links { gap: 10px; }
        .nav-links .login { padding: 8px 12px; }
      }
      /* A vocabulary field notebook: ink, ruled paper, and pocket tabs. */
      body { background: #faf8f2; }
      .nav { border-bottom: 1px solid #1a6fe830; }
      .hero { padding-top: 76px; padding-bottom: 90px; }
      h1 { letter-spacing: -2px; }
      .pill { background: transparent; border-radius: 0; padding: 0; }
      .dot { border-radius: 0; transform: rotate(-12deg); background: #1a6fe8; }
      .scene { background: repeating-linear-gradient(transparent 0 31px, #1a6fe819 31px 32px); border-left: 1px solid #dc9e9260; }
      .halo { width: 290px; height: 230px; top: 150px; background: #bad8ff; border: 2px dashed #7baae7; border-radius: 8px 8px 65px 65px; transform: rotate(5deg); }
      .word-card { border-radius: 5px; box-shadow: 5px 7px 0 #e5dfd1, 0 16px 26px #243c6612; }
      .floating { border-radius: 0; background: #ffe27ad9; transform: rotate(4deg); font-family: Georgia, serif; font-style: italic; font-size: 17px; }
      .grid { gap: 0; border-block: 1px solid var(--line); }
      .feature { background: transparent; border: 0; border-radius: 0; padding: 32px; }
      .feature + .feature { border-left: 1px solid var(--line); }
      .field-notes { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; padding: 30px 0 65px; }
      .notes-copy p:not(.eyebrow) { color: var(--muted); font-size: 14px; max-width: 460px; }
      .notes-copy a { display: inline-block; margin-top: 15px; font-weight: 600; font-size: 14px; }
      .notebook { position: relative; background: repeating-linear-gradient(#fffdf7 0 31px, #dce6ec 31px 32px); padding: 36px 36px 65px; border: 1px solid #dfd9c9; border-radius: 3px; box-shadow: 7px 7px 0 #eee8db; transform: rotate(2deg); }
      .notebook::before { content: ''; position: absolute; width: 90px; height: 27px; background: #ffe27abb; top: -14px; left: 35%; transform: rotate(-8deg); }
      .notebook-label, .notebook-foot { font-size: 10px; letter-spacing: 1px; color: var(--muted); }
      .notebook h3 { font-family: Georgia, serif; font-size: 35px; color: var(--blue); margin: 20px 0 8px; }
      .pencil-note { font: italic 18px/1.75 Georgia, serif; }
      .margin-note { margin-top: 25px; border-left: 2px solid #e4b655; padding-left: 15px; max-width: 270px; }
      .margin-note span { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; }
      .margin-note p { font-size: 13px; margin: 5px 0 20px; }
      .notebook img { position: absolute; bottom: -28px; right: -15px; object-fit: contain; }
      .download { background: transparent; border-block: 2px solid var(--blue); border-radius: 0; padding: 45px 10px; }
      .download .eyebrow { color: var(--blue); }
      @media(max-width: 600px) {
        .hero { padding-top: 35px; padding-bottom: 65px; }
        h1 { font-size: 42px; }
        .feature { padding: 26px 0; }
        .feature + .feature { border-left: 0; border-top: 1px solid var(--line); }
        .field-notes { grid-template-columns: 1fr; gap: 35px; padding: 0 0 40px; }
        .notebook { margin: 0 8px; padding: 28px 23px 65px; }
        .notebook img { right: -10px; width: 110px; height: 110px; }
      }
    </style>
  <style>
html[data-theme="dark"] { --ink:#edf3fc; --muted:#b1bfd1; --line:#3b506b; --pale:#25364c; --blue:#82b5ff; }
html[data-theme="dark"] body { background:#101722; }
html[data-theme="dark"] .notebook { background:repeating-linear-gradient(#182332 0 31px,#3b506b 31px 32px); box-shadow:7px 7px 0 #080e18; }
html[data-theme="dark"] .btn,html[data-theme="dark"] .floating,html[data-theme="dark"] .halo { color:#14263d; }
html[data-theme="dark"] .word-card { background:#182332; color:var(--ink); }
html[data-theme="dark"] .nav-links .login { background:var(--pale); }
html[data-theme="dark"] .button { color:#101c30; }
@media(max-width:640px) { .nav { flex-wrap:wrap; gap:12px; padding-block:16px; } .nav>label { width:100%; text-align:right; } }
select[data-theme-select] { font:inherit; max-width:170px; padding:8px; border:1px solid var(--line); border-radius:10px; background:var(--pale);color:var(--ink); }
</style><style>
.theme-toggle { position:relative; display:inline-flex; align-items:center; justify-content:space-between; width:76px; height:44px; padding:0 10px; border:1px solid #7796be; border-radius:999px; background:#e8f1fd; color:#23416b; cursor:pointer; flex-shrink:0; }
.theme-toggle:focus-visible { outline:3px solid #82b5ff; outline-offset:3px; }
.theme-toggle svg { position:relative; z-index:1; width:18px; height:18px; }
.theme-knob { position:absolute; top:5px; left:5px; width:32px; height:32px; border-radius:50%; background:white; box-shadow:0 1px 4px #0003; transition:transform .18s; }
html[data-theme="dark"] .theme-toggle { background:#25364c; color:#e9f2ff; }
html[data-theme="dark"] .theme-knob { transform:translateX(32px); background:#46668c; }
@media(prefers-reduced-motion:reduce) { .theme-knob { transition:none; } }
</style></head>
  <body>
    <div class="wrap">
      <header class="nav">
        <a class="brand" href="/" aria-label="Vocabite home"
          ><img src="/logo/mark.png" alt="" width="42" height="42" />Vocabite</a
        >
        <nav class="nav-links" aria-label="Main navigation">
          <a class="feature-link" href="#fitur">Features</a><a href="#catatan">Pocket</a
          ><a class="login" href="/login/">Sign in ↗</a>
        </nav>
<button type="button" role="switch" aria-label="Dark mode" aria-checked="false" data-theme-toggle class="theme-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10l2 2M5 19l2-2M17 7l2-2"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z"/></svg><span class="theme-knob"></span></button>
      </header>
      <main>
        <section class="hero">
          <div>
            <span class="eyebrow pill"
              ><span class="dot" aria-hidden="true"></span>A little space for new words</span
            >
            <h1>Found a new word?<br /><span>Pocket it.</span></h1>
            <p class="lead">
              Give new words a place to stay. Look them up, save them to your Pocket, and practice a little at a time until they stick.
            </p>
            <div class="actions">
              <a class="button" href="/login/">Start on the web <span aria-hidden="true">↗</span></a
              ><button class="store" disabled aria-describedby="play-status">
                <svg viewBox="0 0 24 28" fill="none" aria-hidden="true">
                  <path
                    d="M3 2L22 14L3 26V2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path d="M3 2L15 18M3 26L15 10" stroke="currentColor" stroke-width="1.5" /></svg
                ><span><small>COMING SOON TO</small><strong>Google Play</strong></span>
              </button>
            </div>
            <p class="note" id="play-status">
              Use Vocabite in your browser. The Google Play version is coming soon.
            </p>
          </div>
          <div class="scene" aria-label="Example Vocabite vocabulary card">
            <div class="halo" aria-hidden="true"></div>
            <div class="word-card">
              <div class="card-top"><span>MY POCKET</span><span class="tag">noun</span></div>
              <h2>little things</h2>
              <p>Little things. Meaningful progress.</p>
              <p class="translation">hal-hal kecil</p>
              <p class="example">“Enjoy the little things.”</p>
            </div>
            <span class="floating">A word worth keeping.</span
            ><img
              class="mascot"
              src="/mascot/wave.png"
              alt="Vocabite penguin waving"
              width="170"
              height="170"
            /><span class="scene-label">Illustration · sample content</span>
          </div>
        </section>
        <section class="section" id="fitur">
          <div class="section-heading">
            <p class="eyebrow">Turn curiosity into understanding</p>
            <h2>From movie subtitles,<br />to words you know.</h2>
            <p>Interesting words turn up everywhere. Give them a home, then come back when it is time to practice.</p>
          </div>
          <div class="grid">
            <article class="feature">
              <h3>Find a new word</h3>
              <p>In a movie, a book, an article, a meme, or an everyday conversation. New words are everywhere.</p>
            </article>
            <article class="feature">
              <h3>Look up</h3>
              <p>Look it up in Vocabite. Explore meanings, synonyms, Indonesian translations, and examples to understand how the word is used.</p>
            </article>
            <article class="feature">
              <h3>Add to Pocket!</h3>
              <p>Save it to your personal flashcard collection. Recall it anytime and keep practicing until you master it.</p>
            </article>
          </div>
        </section>
        <section class="field-notes" id="catatan" aria-labelledby="notes-title">
          <div class="notes-copy"><p class="eyebrow">Inside your Pocket</p><h2 id="notes-title">Your words,<br />with a story.</h2><p>Add a note about where you found a word: a scene, a line from a book, or a conversation you want to remember.</p><p>Revisit your words during practice. See which ones you remember and which ones need another look.</p><a href="/login/">Start your Pocket <span aria-hidden="true">↗</span></a></div>
          <div class="notebook"><span class="notebook-label">POCKET NOTES / 001</span><h3>serendipity</h3><p class="pencil-note">Finding something wonderful,<br />when you were not looking for it.</p><div class="margin-note"><span>Personal note</span><p>Like finding a great book while just browsing a shop.</p></div><span class="notebook-foot">Example personal note</span><img src="/mascot/study.png" width="130" height="130" loading="lazy" alt="Vocabite penguin studying"></div>
        </section>
        <section class="section faq">
          <div class="section-heading">
            <p class="eyebrow">Meet Vocabite</p>
            <h2>Before you begin</h2>
          </div>
          <details>
            <summary>Why sign in with Google?</summary>
            <p>
              Your account saves and syncs your personal Pocket. Vocabite uses identity information such as your name and email, and does not receive your Google password. Read our <a href="/privacy-policy/">privacy policy</a> for details.
            </p>
          </details>
          <details>
            <summary>Where do the definitions and translations come from?</summary>
            <p>
              English definitions primarily come from Merriam-Webster, with alternative dictionaries when needed. Indonesian translations use Wikikamus and Google Cloud Translation. Definitions and examples come from real dictionaries. Available meanings and examples vary by word.
            </p>
          </details>
          <details>
            <summary>Can everyone see my profile?</summary>
            <p>
              Your profile is shared when you choose to make it public and set a username. Friends can then search for your username or open your profile link to see your shared collection and progress.
            </p>
          </details>
          <details>
            <summary>Is the app available on Google Play?</summary>
            <p>
              Not yet. A download link will be added when the app is available on Google Play. For now, you can start learning on the website.
            </p>
          </details>
        </section>
        <section class="download" aria-labelledby="download-title">
          <p class="eyebrow">Every word is a beginning</p>
          <h2 id="download-title">What word did you discover today?</h2>
          <p>
            Start with a word that caught your curiosity today. Make room for a little learning every day.
          </p>
          <div class="actions">
            <a class="button" href="/login/"
              >Save your first word <span aria-hidden="true">↗</span></a
            >
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="footer-top">
          <div>
            <a class="brand" href="/">Vocabite<span style="color: var(--blue)">.</span></a>
            <p>A pocket for every word · By Jeya’s Club</p>
          </div>
          <div class="footer-links">
            <a href="/privacy-policy/">Privacy policy</a
            ><a href="/terms-of-service/">Terms of service</a
            ><a href="/delete-account/">Delete account</a
            ><a href="mailto:jeyasclub@gmail.com">Contact us</a>
          </div>
        </div>
        <p>
          Need help?
          <!--email_off--><a href="mailto:jeyasclub@gmail.com">jeyasclub@gmail.com</a
          ><!--/email_off-->
        </p>
      </footer>
    </div>
  </body>
</html>
`,n=e(),r=t.split(`<body>`)[1].split(`</body>`)[0];function i(){return(0,n.jsx)(`div`,{dangerouslySetInnerHTML:{__html:r}})}export{i as t};