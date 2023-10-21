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
            sh 'npm instal -gï¿½'
          }
        }

      }
    }

    stage('Sonar') {
      steps {
        withSonarQubeEnv('sonar3') {
          sh 'npm install -g sonarqube-scanner'
        }

      }
    }

    stage('Docker') {
      steps {
        sh 'docker -v'
      }
    }

  }
  tools {
    jdk 'jdk3'
    maven 'maven3'
    nodejs 'node3'
  }
}