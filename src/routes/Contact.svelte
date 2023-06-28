<section>
  <h2>Contact Me</h2>
  <div class="content">
    <p class="description">
      I'm always open to discussing web development work, collaboration opportunities, or anything
      else you'd like to chat about.
    </p>
    <div class="contacts-container">
      <p class="title">Contact</p>
      <address>
        <ul class="contacts">
          <li class="contact">
            <a href="mailto:cooperoliff@gmail.com">
              <img src="https://cdn.simpleicons.org/gmail" alt="Gmail icon" loading="lazy" />
              <span>cooperoliff@gmail.com</span>
            </a>
          </li>
          <li class="contact">
            <a href="https://linkedin.com/in/cooper-oliff">
              <img src="https://cdn.simpleicons.org/linkedin" alt="LinkedIn Icon" loading="lazy" />
              <span>linkedin.com</span>
            </a>
          </li>
        </ul>
      </address>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .description {
      width: 40ch;
    }
  }

  .contacts-container {
    display: inline-block;
    .title {
      font-weight: 600;
      color: white;
      margin-bottom: 1rem;
    }
    .contacts {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    padding: 1rem;
    border: 1px solid var(--color-gray);
  }
  .contact a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-gray);
    text-decoration: none;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    ::after {
      // cool underline effect
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: var(--color-gray);
      transition: width 0.3s;
    }
    &:hover,
    &:focus {
      ::after {
        width: 100%;
      }
    }
  }
</style>
