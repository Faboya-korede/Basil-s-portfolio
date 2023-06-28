import React from 'react';
import { Text, Box, Flex, Divider, Image, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <Box
      id="projects"
      flexDirection="column"
      w={{ base: '80%', sm: '80%', md: '80%', lg: '80%', xl: '80%', '2xl': '1440px' }}
      margin={'0 auto'}
    >
      <Flex flexDirection={'row'} alignItems="center" mb={'5rem'} gap="2rem">
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <Text
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '1.99rem',
          }}
          fontWeight="bold"
          width={{ lg: '63rem', xl: '63rem', '2xl': '63rem' }}
          margin={'0 auto'}
          color="#8c9095"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Some Recent Projects
        </Text>
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </Flex>
      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Box>
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              color="#8c9095"
              mb={'1rem'}
              data-aos="fade-down-right"
              data-aos-delay="500"
            >
              Ansible Project
            </Text>
            <Text data-aos="fade-down-right" data-aos-delay="500">
            Automated Laravel Deployment with Ansible.
            </Text>
            <Text data-aos="fade-down-right" data-aos-delay="500" mt={'1rem'}>
            The "Automated Laravel Deployment with Ansible" project on GitHub aims to automate the deployment process of Laravel applications using Ansible. It provides Ansible playbooks, roles, and configuration files tailored for Laravel applications. By leveraging Ansible's automation capabilities, it simplifies tasks such as server provisioning, environment setup, and application deployment. The project offers modularity and customization options to suit different project requirements. With clear documentation and step-by-step instructions, it provides a streamlined approach to deploying Laravel applications while ensuring consistency and reliability.
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
              data-aos="fade-down-right"
              data-aos-delay="500"
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/Faboya-korede/Automated-Laravel-Deployment-with-Ansible.git"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
                borderRadius={5}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://github.com/Faboya-korede/Automated-Laravel-Deployment-with-Ansible.git"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
          <Image
            src="/laravel-pic.png"
            alt="Terraform Project Preview"
            width={'40rem'}
            borderRadius="8px"
            data-aos="fade-down-left"
            data-aos-delay="500"
          />
        </Flex>
      </Box>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column-reverse',
            sm: 'column-reverse',
            md: 'column-reverse',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Image
            src="/terra.png"
            alt="Laravel Project Preview"
            width={'40rem'}
            borderRadius="8px"
            data-aos="fade-right"
            data-aos-delay="600"
          />

          <Box>
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              color="#8c9095"
              mb={'1rem'}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Simple Html site Deployed using terraform and ansible
            </Text>
            <Text data-aos="fade-left" data-aos-delay="700">
            The "Simple html site deploy using terraform and ansible" GitHub repository showcases my expertise in deploying HTML websites using Terraform and Infrastructure as Code (IaC) principles.
            </Text>
            <Text mt={'1rem'} data-aos="fade-left" data-aos-delay="800">
            Through the use of Terraform's declarative syntax, this project enables streamlined provisioning and deployment of infrastructure resources for static websites. With comprehensive documentation and Terraform configuration files available in the repository, it offers an efficient and scalable approach to managing infrastructure, highlighting my proficiency in automating deployments and ensuring reliable infrastructure for HTML websites. 
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/Faboya-korede/Infrastructure-as-Code-HTML-Site-Deployment-with-Terraform.git"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://github.com/Faboya-korede/Infrastructure-as-Code-HTML-Site-Deployment-with-Terraform.git"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Box>
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              color="#8c9095"
              mb={'1rem'}
              data-aos="fade-up-right"
              data-aos-delay="600"
            >
              Setting up Apache and PHP on AWS Ubuntu 22.04 AMI with Ansible
            </Text>
            <Text data-aos="fade-up-right" data-aos-delay="700">
            ⚡ Setting up Apache and PHP on AWS with Ansible Playbook Using Ubuntu 22.04 AMI. Ansible is a simple and powerful automation engine. It is used to help with configuration management, application deployment, and task automation. It makes your applications and systems easier to deploy and maintain .
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
              data-aos="fade-up-right"
              data-aos-delay="900"
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/Bukola-Testimony/Setting-up-Apache-and-PHP-on-AWS-with-Ansible-Using-Ubuntu-22.04-AMI"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://raw.githubusercontent.com/Bukola-Testimony/Setting-up-Apache-and-PHP-on-AWS-with-Ansible-Using-Ubuntu-22.04-AMI/main/images/ansible.png"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
          <Image
            src="/ansible-aws.png"
            alt="Ansible Project Preview"
            width={'40rem'}
            borderRadius="8px"
            data-aos="fade-up-left"
            data-aos-delay="600"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
