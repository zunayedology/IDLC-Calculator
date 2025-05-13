pipeline {
    agent any
    tools {
        nodejs 'NodeJS' 
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/zunayedology/idlc-calculator.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install --cache .npm' 
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm test' 
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }
    }
}