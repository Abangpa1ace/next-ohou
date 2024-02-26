pipeline {
    agent any
            stages {
            	stage("sonarqube") {
                    steps{
                        script{
                        def scannerHome = tool 'sonarqube-scanner';
                        withSonarQubeEnv(credentialsId:"SONAR_TOKEN",installationName:'sonarqube') {
                          echo '${env.SONAR_HOST_URL}'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}


// pipeline {
//     agent any
    
//     stages {
        
//         stage('github-clone') {
//             steps {
//                 git branch: 'main', credentialsId: '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', url: 'https://github.com/Abangpa1ace/next-ohou.git'
//             }
//         }
        
//    		stage("sonarqube") {
//                     steps{
//                         script{
//                         def scannerHome = tool 'sonarqube-scanner';
//                         withSonarQubeEnv(credentialsId:"SONAR_TOKEN",installationName:'sonarqube') {
//                         sh "${scannerHome}/bin/sonar-scanner"
//                     }
//                 }
//                     }
//       }
//   }
// }