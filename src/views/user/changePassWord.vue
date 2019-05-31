<template>
  <div class="about">
    <div class="content">
      <h1>修改密码</h1>
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原始密码：" prop="age">
          <el-input v-model="ruleForm.age" placeholder="请输入原始密码" />
        </el-form-item>
        <el-form-item label="新密码：" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div></template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('原始密码不能为空'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认新密码密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('修改成功!')
        } else {
          alert('修改失败!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss">
    .about{
        min-width: 1200px;
        .content{
            margin-left: 40px;
            margin-top: 43px;
            width:1560px;
            height:918px;
            background:#fff;
            opacity:1;
            h1{
                font-size:22px;
                font-family:Microsoft YaHei;
                font-weight:600;
                line-height:30px;
                color:rgba(51,51,51,1);
                opacity:1;
                margin-left: 40px;
                line-height: 80px;
            }
            .demo-ruleForm{
                margin-left: 40px;
                .el-input__inner{
                    width: 340px;
                    height: 40px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(225,230,239,1);
                    opacity:1;
                    border-radius:4px;
                }
                .el-form-item__label{
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    opacity:1;
                    width: 94px !important;
                }
                .el-button--primary{
                    width:340px;
                    height:40px;
                    background:rgba(40,96,255,1);
                    opacity:1;
                    border-radius:4px;
                    span{
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        opacity:1;
                    }
                }
            }
        }
    }
</style>

