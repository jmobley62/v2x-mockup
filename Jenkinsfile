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
            script{
              withDockerRegistry(credentialsId: '9425ae75-4440-488f-82f3-82f050455661') {
                sh 'docker build -t v2x-mockup/Dockerfile .'
                sh 'docker tag v2x-mockup:latest'
              }
            }
          }
        }

      }
    }

    stage('Docker Image') {
      steps {
        sh 'docker -v'
      }
    }

  }
  tools {
    maven 'maven3'
    nodejs 'node3'
  }
}