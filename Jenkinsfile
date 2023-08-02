pipeline {
    agent any 
    stages{
        stage('check tools') {
            steps{
                bat "node -v"
                bat "npm -v"
                }
        }

        stage('checkout') {
            steps{
                checkout scm
            }
        }

        stage('npm install'){
            steps{
                bat "npm install"
            }
        }

        stage('unit tests'){
            steps{
            bat "npm test -- --watch=false"
            }
        }

        stage('cypress start server and test'){
            parallel{
                stage('start local server'){
                    steps{
                        bat "npm start"
                    }
                }

                stage('cypress test'){
                    steps{
                        echo "test"
                        bat "npm run cypress:run"
                    }
                }


            }

            post {
                always {
                    echo 'Stopping local server'
                    bat "pkill -f http-server"
                    }
            }
        }
    }
}