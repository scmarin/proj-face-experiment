<script>
    let subjectData = {
        code: "",
        title: "",
        units: "",
        desc: "",
        sem_offered: []
    }

    const submit = async () => {
        await fetch('/api/add-subject', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(subjectData)
        })
            .then(response => response.json())
            .then(body => alert(body.success))
    }

</script>

<form on:submit|preventDefault={submit}>
    {#each ["Code", "Title", "Units", "Desc"] as info}
        <label>
            {info}
            {#if (info == "Units")}
                <input
                    type="number"
                    min="1"
                    max="10"
                    bind:value={subjectData[info.toLowerCase()]}
                    required
                />
            {:else}
                <input
                    bind:value={subjectData[info.toLowerCase()]}
                    required
                />
            {/if}
        </label>
    {/each}
    Sem Offered:
    {#each ["1", "2", "M"] as sem}
        <label>
            {#if (sem === "1")}
                <input
                    type="checkbox"
                    name="sem_offered"
                    value={sem}
                    bind:group={subjectData.sem_offered}
                    required
                />
            {:else}
                <input
                    type="checkbox"
                    name="sem_offered"
                    value={sem}
                    bind:group={subjectData.sem_offered}
                /> 
            {/if}
            {sem}
        </label>
    {/each}
    <button>Submit</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
</style>