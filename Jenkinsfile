pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/zunayedology/idlc-calculator.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                    bat 'npm test'
                }
            }
        }
        stage('Clear Cache') {
            steps {
                bat '''
                if exist "node_modules\\.cache" rmdir /s /q "node_modules\\.cache"
                '''
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_TOKEN')]) {
                    bat '''
                    git config --global user.email "jenkins@idlc-calculator.com"
                    git config --global user.name "Jenkins"
                    set GH_TOKEN=%GITHUB_TOKEN%
                    npx gh-pages -d . -b gh-pages
                    '''
                }
            }
        }
    }
}