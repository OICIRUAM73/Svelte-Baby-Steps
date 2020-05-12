<script>
  let someText = `Frontend Developer at Listatree`;
  let count = 0;
  let styles = {darkMode: false};

  function handleClick() {
    count += 1;
  }

  function toggleDarkMode() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }

</script>

<style>
 	p {
		color: var(--theme-color);
		font-size: 22px;
	}
</style>

<div class="About">
  {#if !styles.darkMode}  
    <p>
      {someText}
    </p>
  {:else}
    <p>Hello Dark Mode</p>
  {/if}
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
  <button on:click={toggleDarkMode}>Dark Mode</button>
</div>