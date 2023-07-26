pipeline{
    agent any
    tools{nodejs "NODEJS"}
    stages{
        stage(source){
            steps{
                git 'https://github.com/bindujoshitha/estore-admin-dashboard.git '
                sh "npm install"
                echo "Source Stage is Completed"
            }
        }
        stage(Test){
            steps{
                sh "npm run cypress:run"
                echo "Test Stage is completed"
            }
        }
        stage(Build){
            steps{
                sh "npm run ng build"
                echo "Test Stage is Finished"
            }
        }
    }
}