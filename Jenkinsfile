pipeline {
    agent any
            stages {
    stage('SonarQube analysis') {
             steps {
                 withSonarQubeEnv('SonarQube-server') {
                     sh 'mvn sonar:sonar'
                 }
             }
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