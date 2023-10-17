pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('') {
      steps {
        sh '''pipeline {
    agent any
    stages {
        stage(\'Build with Maven\') {
            steps {
                sh \'mvn clean install\'
            }
        }

        }
    }

'''
        }
      }

    }
  }