<template>
    <el-container>
        <el-header>
            <el-menu
                :default-active="activeTab"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
            >
                <el-menu-item index="home">
                    <img style="height: 48px" src="../../images/logo-color-small.png" alt="Logo"/>
                </el-menu-item>
                <div class="flex-grow"/>
                <el-menu-item index="demo">
                    Demo
                </el-menu-item>
                <el-menu-item index="documentation">
                    <a href="https://tobytwigger.github.io/laravel-job-status/" target="_blank">Documentation</a>

                </el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <el-row>
                <el-col style="text-align: center;">
                    <div>
                        Use the settings below to dispatch some jobs.
                    </div>
                    <div>
                        Head to <a style="text-decoration: underline; color: blue;" href="/job-status" target="_blank">/job-status</a> to see the dashboard.
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="0" :sm="6"></el-col>
                <el-col :xs="24" :sm="12">
                    <form ref="form" method="post" action="/make-job">
                        <input type="hidden" name="_token" :value="csrf"/>
                        <span v-for="property in Object.keys(formattedJobSchema)" :key="property">
                            <input v-if="!Array.isArray(formattedJobSchema[property])" :name="property"
                                   :value="formattedJobSchema[property]" type="hidden"/>
                            <span v-else v-for="(subProperty, index) in formattedJobSchema[property]" :key="index">
                                <input
                                    :name="property + '[' + index + '][value]'"
                                    :value="subProperty.value" type="hidden"/>
                                <input
                                    :name="property + '[' + index + '][key]'"
                                    :value="subProperty.key" type="hidden"/>
                            </span>
                        </span>
                        <el-card class="box-card">
                            <el-row>
                                <el-col>
                                    <div>
                                        How many jobs to dispatch?
                                    </div>
                                    <el-input-number v-model="jobSchema.jobCount" :min="1" :max="100">
                                    </el-input-number>
                                </el-col>
                            </el-row>
                            <hr/>
                            <el-row>
                                <el-col>
                                    <div>
                                        What type of job(s) should be dispatched?
                                    </div>
                                    <el-select v-model="jobSchema.jobType" class="m-2" placeholder="Select"
                                               size="large"
                                        label="">
                                        <el-option label="Send an Email" value="email"/>
                                        <el-option label="Generate a Report" value="report"/>
                                        <el-option label="Random" value="random"/>
                                    </el-select>

                                </el-col>
                            </el-row>
                            <hr/>
                            <el-row>
                                <el-col>
                                    <div>
                                        Should the job succeed or not?
                                    </div>
                                    <el-select v-model="jobSchema.jobStatus" class="m-2" placeholder="Select"
                                               size="large">
                                        <el-option label="Job will succeed" value="success"/>
                                        <el-option label="Job will fail" value="fail"/>
                                        <el-option label="Job will be cancelled" value="cancel"/>
                                    </el-select>
                                </el-col>
                            </el-row>
                            <hr/>
                            <el-row>
                                <el-col>
                                    <el-switch v-model="jobSchema.messages" class="m-2"
                                               active-color="#13ce66"
                                               inactive-color="#ff4949"
                                               active-text="Job will send messages"
                                               inactive-text="Job will not send messages">
                                    </el-switch>
                                </el-col>
                            </el-row>
                            <hr/>
                            <el-row>
                                <el-col>
                                    <el-switch v-model="jobSchema.batch" class="m-2" active-color="#13ce66"
                                               inactive-color="#ff4949"
                                                  active-text="Job will be part of a batch"
                                                    inactive-text="Job will not be part of a batch"
                                    />
                                </el-col>
                            </el-row>
                            <el-row v-if="jobSchema.batch">
                                <el-col>
                                    <el-input v-model="jobSchema.batchName" placeholder="Batch Name"/>
                                </el-col>
                            </el-row>
                            <div style="text-align: right;">
                                <el-button type="primary" @click="dispatchJob">Dispatch Job</el-button>
                            </div>
                        </el-card>
                    </form>

                </el-col>
                <el-col :xs="0" :sm="6"></el-col>
            </el-row>

        </el-main>
    </el-container>
</template>

<script>

export default {
    name: "DispatchJobs",
    data() {
        return {
            activeTab: null,
            jobSchema: {
                jobCount: 1,
                jobType: 'email',
                jobStatus: 'success',
                messages: true,
                batch: false,
                batchName: null
            }
        }
    },
    methods: {
        handleSelect(key) {
            if (key === 'demo') {
                window.location.href = '/';
            }
        },
        dispatchJob() {
            this.$refs.form.submit();
        }
    },
    computed: {
        csrf() {
            return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        },
        formattedJobSchema() {
            let schema = {
                tag: [
                    {key: 'activated', value: false},
                ],
                delay: 4,
                sleep: 3,
                messages: this.jobSchema.messages,
                job: this.jobSchema.jobType,
                fail: this.jobSchema.jobStatus === 'fail' ? 1 : 0,
                cancel: this.jobSchema.jobStatus === 'cancel' ? 1 : 0,
                count: this.jobSchema.jobCount,
                batch: this.jobSchema.batch ? 1 : 0,
            }
            if(schema.batch === 1) {
                schema.batch_name = this.jobSchema.batchName;
            }
            return schema;
        }
    }

}
</script>

<style scoped>

</style>
