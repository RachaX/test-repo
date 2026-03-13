<template> 
    <div class="container">
        <div class="outer">
            <div class="about__header">
                <h1 class="about__title">About</h1>
                <div class="about__divider"><span>◈</span></div>
            </div>
            <div class="info">
                <div class="info__row">
                    <label class="info__label">Company name</label>
                    <h2 class="info__content">Omega-Devs</h2>
                </div>
                <div class="info__row">
                    <label class="info__label">Owner</label>
                    <h2 class="info__content">Bojan Mikulić</h2>
                </div>
                <div class="info__row">
                    <label class="info__label">Since</label>
                    <h2 class="info__content">2.12.2021.</h2>
                </div>
                <div class="info__row">
                    <label class="info__label">Located In</label>
                    <h2 class="info__content">Mrkonjić Grad</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .about__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-align: center;   
    }

    .about__title {
        font-family: var(--font-display);
        font-size: 42px;
        font-weight: 300;
        color: var(--white);
        letter-spacing: 0.05em;
    }

    .about__divider {
        color: var(--gold-dim);
        font-size: 14px;
        margin-top: 4px;
    }

    .info__row {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
    }

    .info__label {
        font-family: var(--font-display);
        letter-spacing: 0.05em;
        font-size: 20px;
    }

    .info__content {
        font-family: var(--font-body);
        color: var(--gold);
        text-transform: uppercase;
    }

    .info__content:hover {
        color: var(--gold-dim);
        cursor: pointer;
    }
</style>