node {
    def nodeHome = tool name: 'node-18', type:
    'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage('check tools') {
        bat "node -v"
        bat "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        bat "npm install"
    }

    stage('unit tests') {
        bat "npm test -- --watch=false"
    }

    stage{
        stage('start local server') {
                // start local server in the background
                // we will shut it down in "post" command block
                bat "nohup npm run start &"
        }

        stage('cypress tests') {
            bat "npm run cypress:run"
        }

        post {
            always {
              echo 'Stopping local server'
              sh 'pkill -f http-server'
            }
        }
    }
}