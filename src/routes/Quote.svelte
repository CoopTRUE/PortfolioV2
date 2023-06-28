<section>
  <div class="quote">Talk is cheap. Show me the code</div>
  <div class="author">- Linus Torvalds</div>
</section>

<style lang="scss">
  section {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 4.625rem;
  }
  .quote {
    position: relative;
    font-weight: 500;
    padding: 2rem;
    border: 1px solid var(--color-gray);
    &::before {
      content: url('$lib/svgs/quote.svg');
      background: var(--color-bg);
      padding: 0.25rem 0.5rem;
      position: absolute;
      transform: translate(25%, -50%);
      left: 0;
      top: 0;
    }
    &::after {
      content: url('$lib/svgs/quote.svg');
      background: var(--color-bg);
      padding: 0.25rem 0.5rem;
      position: absolute;
      transform: translate(-25%, 50%);
      right: 0;
      bottom: 0;
    }
  }
  .author {
    float: right;
    display: inline;
    border: 1px solid var(--color-gray);
    border-top: none;
    padding: 1rem;
  }
</style>
