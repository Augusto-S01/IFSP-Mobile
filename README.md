# QuickNotes

Um aplicativo móvel para anotações rápidas.

O projeto tem como propósito as aplicações de aprendizado das aulas de Aplicativos Móveis do curso de graduação do Instituto Federal de São Paulo.

![](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=Capacitor&logoColor=white)

## Começando

Para criar o ambiente de desenvolvimento próximo ao que foi desenvolvido, veja os pré-requisitos e siga os passos abaixo:

Baixe o projeto na sua máquina ou clone o repositório utilizando git na sua máquina.

**Via SSH:**

```bash
git clone git@github.com:Augusto-S01/IFSP-Mobile.git
```

**Via HTTP:**

```bash
git clone https://github.com/Augusto-S01/IFSP-Mobile.git
```

Para executar o aplicativo em desenvolvimento na máquina local, dentro da pasta onde o projeto foi clonado, execute o comando no terminal:

```bash
ionic serve
```

## Pré-requisitos

- Node.js | v16.20.2
- Ionic/cli | v7.1.1
- Npm | v8.19.4

## Gerando aplicativo para celular Android

Na raiz do projeto, execute o comando:

```bash
ionic cap sync
```

Este comando criará uma pasta `www`. Em seguida, utilize o comando:

```bash
ionic capacitor build android
```

Ao final do processo, será criada a pasta `android`. Entre no diretório e execute o comando:

```bash
./gradlew assembleDebug
```

O APK será criado no diretório `/app/build/outputs/apk/debug`.

## Autores

- **Augusto Souza** - *Desenvolvimento* - [Perfil](https://github.com/Augusto-S01)
- **Jhennerson Barbosa** - *Desenvolvimento* - [Perfil](https://github.com/jhennerson)
