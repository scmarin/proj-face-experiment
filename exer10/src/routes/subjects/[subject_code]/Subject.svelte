<script>
    export let data;
</script>

{#if data}
    <h3>{data.subject.code}</h3>
    <p>Detail page for {data.subject.code}</p>
    <p>Title: {data.subject.code}</p>
    <p>Desc: {data.subject.desc}</p>
    <p>Units: {data.subject.units}</p>
    <p>Sem Offered:</p>
    <ol>
        {#each data.subject.sem_offered as sem_offered}
            <li>{sem_offered}</li>
        {/each}
    </ol>
{/if}