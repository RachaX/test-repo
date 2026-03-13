<template>
        <div class="container">
            <div class="outer">
                <div class="form__header">
                    <span class="form__eyebrow">
                        Get in touch
                    </span>
                    <h1 class="form__title">
                        Contact Sales
                    </h1>
                    <div class="form__divider"><span>◈</span></div>
                </div>
                <form class="form" @submit.prevent="handleSubmit">
                    <div class="form__row">
                        <div class="form__group">
                            <label class="form__label">First name</label>
                            <input v-model="form.firstName" @blur="touch('firstName')" class="form__input" type="text" placeholder="John">
                            <span class="form__error" v-if="touched.firstName && errors.firstNameError">{{ errors.firstNameError }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label">Last name</label>
                            <input v-model="form.lastName" @blur="touch('lastName')" class="form__input" type="text" placeholder="Doe">
                            <span class="form__error" v-if="touched.lastName && errors.lastNameError">{{ errors.lastNameError }}</span>
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__group">
                            <label class="form__label">Email</label>
                            <input v-model="form.email" @blur="touch('email')" class="form__input" type="text" placeholder="your@mail.com">
                            <span class="form__error" v-if="touched.email && errors.emailError">{{ errors.emailError }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label">Phone number</label>
                            <input v-model="form.phoneNumber" @blur="touch('phoneNumber')" class="form__input" type="text" placeholder="Your phone number">
                            <span class="form__error" v-if="touched.phoneNumber && errors.phoneError">{{ errors.phoneError }}</span>
                        </div>
                    </div>

                    <div class="form__group">
                        <label class="form__label">Preffered contact method</label>
                        <div class="form__select-wrapper">
                            <select v-model="form.contactMethod" @blur="touch('contactMethod')" class="form__select">
                                <option value="" disabled>Select method</option>
                                <option value="email">Email</option>
                                <option value="phone_number">Phone number</option>
                            </select>
                            <span class="form__select-arrow">▾</span>
                            <span class="form__error" v-if="touched.contactMethod && errors.contactMethodError">{{ errors.contactMethodError }}</span>
                        </div>
                    </div>

                    <div class="form__group">
                        <label class="form__label">Message</label>
                        <textarea v-model="form.message" @blur="touch('message')" class="form__textarea" placeholder="Tell us about your project..." rows="4"></textarea>
                        <span class="form__error" v-if="touched.message && errors.messageError">{{ errors.messageError }}</span>
                    </div>

                    <button class="form__submit" :disabled="!isFormValid" type="submit" :class="{ 'form__submit--disabled' : !isFormValid}">
                        <span>Send message</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Contact",
        computed: {
            errors() {
                return {
                    firstNameError: !this.form.firstName.trim() 
                    ? 'First name is required.'
                    : !/^[a-zA-ZČčĆćŠšĐđŽž]{2,}$/.test(this.form.firstName)
                    ? 'Only letters allowed.'
                    : '',

                    lastNameError: !this.form.lastName.trim() 
                    ? 'Last name is required.'
                    : !/^[a-zA-ZČčĆćŠšĐđŽž]{2,}$/.test(this.form.lastName)
                    ? 'Only letters allowed.'
                    : '',

                    emailError: this.form.contactMethod === 'email' && !this.form.email.trim() 
                    ? 'Email is required.'
                    : this.form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)
                    ? 'Invalid email.'
                    : '',

                    phoneError: this.form.contactMethod === 'phone_number' && !this.form.phoneNumber.trim()
                    ? 'Phone number is required.'
                    : this.form.phoneNumber && !/^\+?[0-9]{6,15}$/.test(this.form.phoneNumber)
                    ? 'Invalid phone number.'
                    : '',

                    contactMethodError: !this.form.contactMethod.trim()
                    ? 'Contact method is required.'
                    : '',

                    messageError: !this.form.message.trim()
                    ? 'Message is required.' 
                    : ''
                }
            },
            isFormValid() {
                return !this.errors.firstNameError && !this.errors.lastNameError
                    && !this.errors.messageError && !this.errors.contactMethodError &&
                    (this.form.contactMethod === 'email' ? !this.errors.emailError : !this.errors.phoneError)
                    && this.form.firstName.trim() !== ''
                    && this.form.lastName.trim() !== ''
                    && this.form.message.trim() !== ''
                    && this.form.contactMethod !== ''
                    && (this.form.contactMethod === 'email' ? this.form.email.trim() !== '' : this.form.phoneNumber.trim !== '');
            }
        },
        data() {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    contactMethod: '',
                    message: ''
                },
                touched: {
                    firstName: false,
                    lastName: false,
                    phoneNumber: false,
                    email: false,
                    contactMethod: false,
                    message: false
                }
            }
        },
        methods: {
            handleSubmit() {
                console.log(form);
            },
            touch(field) {
                this.touched[field] = true;
            }
        }
    }
</script>

<style scoped>  
    .form__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-align: center;
    }

    .form__eyebrow {
        font-family: var(--font-body);
        font-size: 10px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: var(--gold);
    }

    .form__title {
        font-family: var(--font-display);
        font-size: 42px;
        font-weight: 300;
        color: var(--white);
        letter-spacing: 0.05em;
    }

    .form__divider {
        color: var(--gold-dim);
        font-size: 14px;
        margin-top: 4px;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form__row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .form__group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form__label {
        font-size: 10px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--white-dim);
    }

    .form__input,
    .form__select,
    .form__textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--gold-dim);
        color: var(--white);
        font-family: var(--font-body);
        font-size: 14px;
        font-weight: 300;
        padding: 10px 0px;
        outline: none;
        transition: border-color 0.3s ease;
        width: 100%;
    }

    .form__input::placeholder,
    .form__textarea::placeholder {
        color: var(--white-dim);
        opacity: 0.5;
    }

    .form__input:focus,
    .form__select:focus,
    .form__textarea:focus {
        border-bottom-color: var(--gold);
    }
    
    .form__select-wrapper {
        position: relative;
    }

    .form__select {
        appearance: none;
        cursor: pointer;
    }

    .form__select option {
        background: var(--black-card);
        color: var(--white);
    }

    .form__select-arrow {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: var(--gold);
        pointer-events: none;
        font-size: 14px;
    }

    .form__textarea {
        resize: none;
        border: 1px solid var(--gold-dim);
        padding: 12px;
        transition: border-color 0.3s ease;
    }

    .form__textarea:focus {
        border-color: var(--gold);
    }

    .form__submit {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 14px 32px;
        background: transparent;
        border: 1px solid var(--gold-dim);
        color: var(--gold);
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        cursor: pointer;
        align-self: flex-end;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .form__submit:hover {
        color: var(--black);
    }

    .form__submit:hover::before {
        transform: translateX(0);
    }

    .form__submit span,
    .form__submit svg {
        position: relative;
        z-index: 1;
    }

    .form__error {
        font-size: 10px;
        color: #c0392b;
        letter-spacing: 0.1em;
        margin-top: 2px;
    }

    .input--error {
        border-bottom-color: #c0392b !important;
    }

    .form__submit--disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

</style>