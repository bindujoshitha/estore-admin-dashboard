pipeline{
    agent any
    stages{
         stage('Build') {
        steps {
           script{
             if(params.SKIP_TESTS){
               sh 'npm install'
               sh 'npm run build:${ENV}'
             }else{
               sh 'npm install'
               sh 'npm run test'
               sh 'npm run build:${ENV}'
                    }
                  }
               }
             }
    }
}
