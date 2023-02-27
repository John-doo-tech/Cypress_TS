module.exports = {
  env: {
    be: {
      host: "https://student-api-stg.kyons.vn",
      account: {
        system_admin: {
          email: "kyons.internal+auto_test_sa@gmail.com",
          password: "-vC41k24",
        },
      },
    },
    fe: {
      host: "https://student-stg.kyons.vn",
      account: {
        student: [
          {
            student_id: 583,
            student_name: "QA Hiep4",
            email: "ddhiep448+stg_test4@gmail.com",
            password: "Password@123"
          }
        ]
      }
    }
  }
};
