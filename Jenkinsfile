pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('Builds') {
      steps {
        sh '''mvn clean install
cd Maven_Test/
ls'''
      }
    }

    stage('NodeJS') {
      steps {
        sh 'npm instal -g '
      }
    }

  }
  tools {
    maven 'maven3'
    nodejs 'node3'
    docker 'docker3'
  }
}