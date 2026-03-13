<template>
    <header class="header" :class="{ scrolled : isScrolled}">
        <div class="header__inner">
            <div class="header__logo">
                <span class="logo-mark"></span>
                <span class="logo-text">Omega-Devs</span>
            </div>

            <div class="header__nav">
                <router-link to="/contact" class="nav-link">Contact</router-link>
                <router-link to="/about" class="nav-link">About</router-link>
            </div>

            <router-link to="/contact" class="header__cta">
                <span>Contact Sales</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
            </router-link>
        </div>
        <div class="header__line">
            <div class="header__line-fill"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isScrolled : false
            }
        },
        methods: {
            handleScroll() {
                isScrolled = window.scrollY > 40;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        unmounted() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
        padding: 0 48px;
        transition: background 0.4s ease, padding 0.4s ease;
    }

    .header.scrolled {
        background: rgba(10, 10, 10, 0.92);
        backdrop-filter: blur(12px);
        padding: 0 48px;
    }

    .header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
    }

    .header__logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        cursor: pointer;
    }

    .logo-mark{
        color: var(--gold);
        font-size: 22px;
        line-height: 1;
    }

    .logo-text {
        font-family: var(--font-body);
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 0.25em;
        color: var(--gold);
    }

    .header__nav {
        display: flex;
        gap: 40px;
    }


    .nav-link {
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 400;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--white-dim);
        text-decoration: none;
        position: relative;
        transition: color 0.3s ease;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--gold);
        transition: width 0.3s ease;
    }

    .nav-link:hover {
        color: var(--gold-light);
    }

    .nav-link:hover::after {
        width: 100%;
    }

    .header__cta {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 24px;
        border: 1px solid var(--gold-dim);
        color: var(--gold);
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .header__cta::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--gold);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: -1;
    }

    .header__cta:hover {
        color: var(--black);
        border-color: var(--gold);
    }

    .header__cta:hover::before {
        transform: translateX(0);
    }

    .height__line {
        height: 1px;
        background: rgba(201, 168, 76, 0.1);
        overflow: hidden;
    }

    .height__line-fill {
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
        animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
</style>