import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">TC</span>
            <span className="brand-name">Talking Coach</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#stories">Stories</a>
            <a href="#pricing">Pricing</a>
          </div>
          <button className="nav-cta">Join the beta</button>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Real-time speaking feedback</p>
            <h1>Speak with clarity, pace, and presence every time you present.</h1>
            <p className="lead">
              Talking Coach is a real-time desktop AI that listens while you speak and
              gives live guidance on pacing, clarity, and delivery for presentations,
              interviews, and Zoom calls.
            </p>
            <div className="hero-actions">
              <button className="primary">Start free trial</button>
              <button className="ghost">Watch the 90-sec demo</button>
            </div>
            <div className="hero-meta">
              <div>
                <span className="stat">4.9</span>
                <span className="stat-label">avg rating</span>
              </div>
              <div>
                <span className="stat">30k+</span>
                <span className="stat-label">sessions coached</span>
              </div>
              <div>
                <span className="stat">10s</span>
                <span className="stat-label">to get live tips</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <div className="pulse" />
              <p>Live Session</p>
              <span className="chip">Listening</span>
            </div>
            <div className="waveform">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="insights">
              <div className="insight">
                <p>Pacing</p>
                <strong>Just right</strong>
                <span className="meter good" />
              </div>
              <div className="insight">
                <p>Clarity</p>
                <strong>Slow down 5%</strong>
                <span className="meter warn" />
              </div>
              <div className="insight">
                <p>Energy</p>
                <strong>Lift on key points</strong>
                <span className="meter mid" />
              </div>
            </div>
            <div className="transcript">
              <p>
                You are moving into the main idea. Pause for one beat, then land the
                next line with emphasis.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="section features" id="features">
        <div className="section-title">
          <p className="eyebrow">Coaching that keeps up</p>
          <h2>Everything you need to sound polished and persuasive.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Live pacing meter</h3>
            <p>Stay in the sweet spot with real-time speed feedback and gentle nudges.</p>
          </article>
          <article className="feature-card">
            <h3>Clarity coach</h3>
            <p>Catch filler words, muddled phrases, and unclear transitions as you speak.</p>
          </article>
          <article className="feature-card">
            <h3>Delivery cues</h3>
            <p>Get on-screen prompts to pause, emphasize, and land your strongest ideas.</p>
          </article>
          <article className="feature-card">
            <h3>Session replay</h3>
            <p>Review your sessions with highlight reels and actionable takeaways.</p>
          </article>
        </div>
      </section>

      <section className="section steps" id="how">
        <div className="section-title">
          <p className="eyebrow">How it works</p>
          <h2>From warm-up to confident delivery in minutes.</h2>
        </div>
        <div className="step-grid">
          <div className="step">
            <span className="step-number">01</span>
            <h3>Launch Talking Coach</h3>
            <p>Open the desktop app before your presentation, interview, or meeting.</p>
          </div>
          <div className="step">
            <span className="step-number">02</span>
            <h3>Speak naturally</h3>
            <p>Talk as you normally would while the AI listens and measures delivery.</p>
          </div>
          <div className="step">
            <span className="step-number">03</span>
            <h3>Act on live cues</h3>
            <p>Follow real-time prompts to adjust pace, clarity, and emphasis.</p>
          </div>
        </div>
      </section>

      <section className="section highlight">
        <div className="highlight-content">
          <p className="eyebrow">Made for real moments</p>
          <h2>Designed for Zoom calls, interviews, and high-stakes talks.</h2>
          <p>
            Talking Coach runs quietly in the background and adapts to your speaking
            style. You stay present. It stays helpful.
          </p>
          <div className="pill-row">
            <span>Desktop native</span>
            <span>Privacy first</span>
            <span>Instant setup</span>
          </div>
        </div>
        <div className="highlight-card">
          <div>
            <h3>Next up: Executive update</h3>
            <p>Goal: persuasive, 6 minutes</p>
          </div>
          <div className="mini-grid">
            <div>
              <p>Confidence</p>
              <strong>82%</strong>
            </div>
            <div>
              <p>Clarity</p>
              <strong>90%</strong>
            </div>
            <div>
              <p>Energy</p>
              <strong>76%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="stories">
        <div className="section-title">
          <p className="eyebrow">Real voices</p>
          <h2>People sound sharper after one session.</h2>
        </div>
        <div className="testimonial-grid">
          <article>
            <p>
              "Talking Coach kept my pacing tight during a board update. I finally
              sounded as confident as I felt."
            </p>
            <div>
              <strong>Alina C.</strong>
              <span>Product lead</span>
            </div>
          </article>
          <article>
            <p>
              "The live cues are subtle but powerful. It is like having a coach in my
              ear without the pressure."
            </p>
            <div>
              <strong>Marcus R.</strong>
              <span>Founder</span>
            </div>
          </article>
          <article>
            <p>
              "I used it for interview prep and landed the offer. The clarity prompts
              were a game changer."
            </p>
            <div>
              <strong>Nadia P.</strong>
              <span>UX researcher</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section cta" id="pricing">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Ready to sound unstoppable?</p>
            <h2>Start your free trial and get live coaching today.</h2>
            <p>
              Choose the plan that fits your speaking schedule. Cancel any time, no
              stress.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary">Start free trial</button>
            <button className="ghost">Talk to sales</button>
            <p>14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <span className="brand-name">Talking Coach</span>
          <p>Real-time feedback for confident communication.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#stories">Stories</a>
          <a href="#pricing">Pricing</a>
        </div>
      </footer>
    </div>
  )
}

export default App
