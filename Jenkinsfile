pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jmobley62/v2x-mockup', branch: 'master')
      }
    }

    stage('error') {
      steps {
        sh '''pipeline {
    agent any
    stages {
        stage(\'Checkout\') {
            steps {
                // Check out your source code from version control here
            }
        }
        stage(\'Build with Maven\') {
            steps {
                sh \'mvn clean install\'
            }
        }
        stage(\'Additional Stages\') {
            steps {
                // Add any other necessary stages here
            }
        }
    }
}
'''
        }
      }

    }
  }