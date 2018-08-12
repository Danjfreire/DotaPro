<template>
    <section>
        <h3 class="pageTitle">Meta</h3>
        <div class="col-xl-12">
            <h4 class="col-xl-12 text-silver text-center ">Heroes</h4>
            <div class="row">
                <div class="card bg-dark2 col-xl-4">
                    <div class="card-body bg-dark2">
                        <h5 class="card-title pageTitle text-center">Most Picked Heroes</h5>
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/73.png')">
                                <span class="text-silver my_font">Alchemist</span>
                                <span class="pageTitle float_right my_font">80/120</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/3.png')">
                                <span class="text-silver my_font">Bane</span>
                                <span class="pageTitle float_right my_font">70/120</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/43.png')">
                                <span class="text-silver my_font">Death Prophet</span>
                                <span class="pageTitle float_right my_font">60/120</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="card bg-dark2 col-xl-4">
                    <div class="card-body bg-dark2">
                        <h5 class="card-title pageTitle text-center">First Picked</h5>
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/73.png')">
                                <span class="text-silver my_font">Alchemist</span>
                                <span class="pageTitle float_right my_font">66.0%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/3.png')">
                                <span class="text-silver my_font">Bane</span>
                                <span class="pageTitle float_right my_font">62.20%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/43.png')">
                                <span class="text-silver my_font">Death Prophet</span>
                                <span class="pageTitle float_right my_font">57%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="card bg-dark2 col-xl-4">
                    <div class="card-body bg-dark2">
                        <h5 class="card-title pageTitle text-center">Highest Win Rate</h5>
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/73.png')">
                                <span class="text-silver my_font">Alchemist</span>
                                <span class="pageTitle float_right my_font">66.0%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/3.png')">
                                <span class="text-silver my_font">Bane</span>
                                <span class="pageTitle float_right my_font">62.20%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/43.png')">
                                <span class="text-silver my_font">Death Prophet</span>
                                <span class="pageTitle float_right my_font">57%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row bg-dark2">
                <div class="card bg-dark2 col-xl-4">
                    <div class="card-body bg-dark2">
                        <h5 class="card-title pageTitle text-center">Most Banned Heroes</h5>
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/73.png')">
                                <span class="text-silver my_font">Alchemist</span>
                                <span class="pageTitle float_right my_font">80/120</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/3.png')">
                                <span class="text-silver my_font">Bane</span>
                                <span class="pageTitle float_right my_font">70/120</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/43.png')">
                                <span class="text-silver my_font">Death Prophet</span>
                                <span class="pageTitle float_right my_font">60/120</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card bg-dark2 col-xl-4">
                    <div class="card-body bg-dark2">
                        <h5 class="card-title pageTitle text-center">First Banned</h5>
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/73.png')">
                                <span class="text-silver my_font">Alchemist</span>
                                <span class="pageTitle float_right my_font">66.0%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/3.png')">
                                <span class="text-silver my_font">Bane</span>
                                <span class="pageTitle float_right my_font">62.20%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/43.png')">
                                <span class="text-silver my_font">Death Prophet</span>
                                <span class="pageTitle float_right my_font">57%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card bg-dark2 col-xl-4">
                    <div class="card-body bg-dark2">
                        <h5 class="card-title pageTitle text-center">Lowest Win Rate</h5>
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/73.png')">
                                <span class="text-silver my_font">Alchemist</span>
                                <span class="pageTitle float_right my_font">66.0%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/3.png')">
                                <span class="text-silver my_font">Bane</span>
                                <span class="pageTitle float_right">62.20%</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-red">
                                <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/43.png')">
                                <span class="text-silver my_font">Death Prophet</span>
                                <span class="pageTitle float_right my_font">57%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Meta"
}
</script>
