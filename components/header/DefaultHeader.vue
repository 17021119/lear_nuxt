<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link  class="nuxt-link-exactactive" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks">Decks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Settings</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: #000;
  display: flex;
  height: 60px;
  justify-content: center;
  nav,
  ul {
    height: inherit;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1.5rem;
      a {
        text-decoration: none;
        color: #fff;
        &:hover{
          text-decoration: underline;
        }
        &.nuxt-link-exact-active{
          color: red;
        }
      }

    }
  }
}
</style>