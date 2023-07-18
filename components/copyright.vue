<template>
    <footer class="footer divider">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h4 class="mb-2">
                        {{ $t("footer.address") }}
                    </h4>
                    <ul class="">
                        <li>📍 Kota Medan</li>
                    </ul>
                </div>
                <div class="column is-2">
                    <h4 class="mb-2">
                        {{ $t("footer.contact") }}
                    </h4>
                    <ul>
                        <li>
                            <a href="tel:+03199220368">(031) 9922 0368</a>
                        </li>
                    </ul>
                </div>
                <div class="column is-2">
                    <h4 class="mb-2">
                        {{ $t("footer.about") }}
                    </h4>
                    <ul>
                        <li>
                            <nuxt-link
                                :to="localePath(`/page/terms-and-conditions`)"
                            >
                                {{ $t("page.terms") }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/page/privacy-policy`)">
                                {{ $t("page.privacy") }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="column is-2">
                    <h4 class="mb-2">
                        {{ $t("footer.others") }}
                    </h4>
                    <ul>
                        <li>
                            <nuxt-link :to="localePath(`/booking`)">
                                {{ $t("page.booking") }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/article`)">
                                {{ $t("page.article") }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/service`)">
                                {{ $t("page.service") }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="divider" />
            <p>
                &copy; {{ year }} {{ $t("company") }}
                {{ $t("footer.copyright") }}
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    methods: {
        togglerSideNavigation(remove) {
            Array.from(
                document.getElementsByClassName("navbar-burger")
            ).forEach((el) => {
                remove
                    ? el.classList.remove("is-active")
                    : el.classList.toggle("is-active");
                Array.from(
                    document.getElementsByClassName("navbar-menu")
                ).forEach((el) => {
                    remove
                        ? el.classList.remove("is-active")
                        : el.classList.toggle("is-active");
                });
            });
        },
        observeNavigation() {
            Array.from(document.getElementsByClassName("navbar-item")).forEach(
                (el) => {
                    el.addEventListener("click", () => {
                        this.togglerSideNavigation(true);
                    });
                }
            );
            Array.from(
                document.getElementsByClassName("navbar-burger")
            ).forEach((el) => {
                el.addEventListener("click", () => {
                    this.togglerSideNavigation(false);
                });
            });
        },
    },
    mounted() {
        this.observeNavigation();
    },
};
</script>
