<script>
    import { invalidateAll } from '$app/navigation';

    export let data;

    const deleteSubject = async(code) => {
        await fetch("/api/delete-subject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code })
        })
            .then(response => response.json())
            .then(body => {
                invalidateAll();
                alert(body.success);
            });
    }
</script>

<h3>{data.greeting}</h3>
<h1>Subject List</h1>
{#if data.subjectsList && data.subjectsList.length}
    <ol>
        {#each data.subjectsList as subject (subject.code)}
            <div style="display: flex; column-gap: 10px">
                <li><a href="/subjects/{subject.code}">{subject.code}</a></li>
                <button on:click={() => deleteSubject(subject.code)}>Delete</button>
            </div>
        {/each}
    </ol>
{:else}
    <p>Loading</p>
{/if}