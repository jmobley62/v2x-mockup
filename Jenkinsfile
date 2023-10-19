pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Installs') {
      parallel {
        stage('Maven') {
          steps {
            sh '''mvn clean install
'''
          }
        }

        stage('NodeJS') {
          steps {
            sh 'npm instal -g�'
          }
        }

        stage('Docker') {
          steps {
            sh 'node -v'
          }
        }

      }
    }

    stage('Docker Image') {
      steps {
        sh 'npm install docker'
      }
    }

  }
  tools {
    maven 'maven3'
    nodejs 'node3'
  }
}