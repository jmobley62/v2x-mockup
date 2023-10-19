pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Maven') {
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
            sh '''npm install dockerode
'''
          }
        }

      }
    }

    stage('Docker Image') {
      steps {
        sh 'docker build -f v2x-mockup/Dockerfile .'
      }
    }

  }
  tools {
    maven 'maven3'
    nodejs 'node3'
  }
}