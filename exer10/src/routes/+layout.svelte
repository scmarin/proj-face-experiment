<script>
    const pages = [
        {
            url: "/",
            title: "Home"
        },
        {
            url: "/subjects",
            title: "Subjects"
        },
        {
            url: "/add-subjects",
            title: "Add Subjects"
        }
    ]

    let selected = "Home";
</script>

<nav>
    {#each pages as { url, title }}
        <div class="nav-button">
            <a
                href="{url}"
                class="nav-text"
                aria-current={title === selected}
                on:click={() => selected = title}
            >{title}</a>
        </div>
    {/each}
</nav>

<slot />

<style>
    nav {
        height: fit-content;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        background-color: lightgray;
        padding: 10px 0px 10px 20px;
    }

    .nav-text{
        color: black;
        text-decoration: none;
    }

    .nav-text[aria-current="true"]{
        text-decoration: underline;
    }

    .nav-button {
        padding: 10px;
    }

    .nav-button:hover {
        background-color: grey;
    }
</style>