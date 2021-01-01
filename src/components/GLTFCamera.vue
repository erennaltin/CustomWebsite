  
<template>
  <div class="GLTFCamera">
    <div id="scene-container" ref="sceneContainer"></div>
    <p id="Loader" v-if="!finish"> The spaceship is preparing for the mission ... </p>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { mapState } from 'vuex';
// import Stats from 'stats.js'

let container;
let scene;
let camera;
let controls;
let renderer;
// let stats;
let loader;




export default {
  name: 'GLTFCamera',
  data(){
    return {
      controls: '',
      ship: '',
      finish: false,
    }
  },
  props: {
    mode: String
  },

  computed: mapState({
            currentFlag: state => state.currentFlag
        }),
  methods: {
    init () {
      // set container
      container = this.$refs.sceneContainer
      // add stats
      // stats = new Stats()
      // container.appendChild(stats.dom)
      // add camera
      const fov = 40 // Field of view
      const aspect = container.clientWidth / container.clientHeight
      const near = 0.1 // the near clipping plane
      const far = 100 // the far clipping plane
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.set(0, 0, 2.5)
      camera.rotation.set(0, 2, 0)
      // create scene
      scene = new THREE.Scene()
      scene.rotation.set(0, 0,0)
      scene.position.set(0, 0, 0)
    //   scene.background = new THREE.Color('skyblue')
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        1 // intensity
      )
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0)
      // const mainLight2 = new THREE.DirectionalLight(0xffffff, 4.0)
      const mainLight3 = new THREE.DirectionalLight(0x8f1bd1, 4.0)
      
      mainLight.position.set(10, 10, 10)
      // mainLight2.position.set(30, 30, 30)
      scene.add(ambientLight, mainLight, mainLight3)
      // add controls
      controls = new OrbitControls(camera, container)
      // controls.minDistance = 2.5;
      // controls.maxDistance = 4;
      controls.enablePan = false;
      controls.enableZoom = false;

      this.controls = controls
      // create renderer
      renderer =  new THREE.WebGLRenderer({ antialias: true, alpha:true })
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.gammaFactor = 2.2
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.physicallyCorrectLights = true
      container.appendChild(renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
      loader = new GLTFLoader()      
      loader.load(
        '/assets/Models/space-ship.glb',
        async (gltf) => {
          // gltf.userData.name = 'SpaceShip'
          await scene.add(gltf.scene)
          this.finish = true
          this.ship = gltf.scene
          this.ship.rotation.set(0, 3.5, 0)
          this.ship.scale.set(1.5, 1.5, 1.5)

        },
        undefined,
        undefined
      )

       renderer.setAnimationLoop(() => {
        this.render()
      })
    },


    render () {
      if(this.ship !== '' && this.currentFlag % 2 === 0 && this.mode === 'await') {
        this.ship.rotation.z -=  0.0003
      }
      else if(this.ship !== '' && this.mode === 'await'){
        this.ship.rotation.z +=  0.00033
      }
      else if(this.ship !== '' && this.mode === 'prepare'){
        controls.enableRotate = false;
        controls.reset();
        this.ship.rotation.y -= 0.001
        this.ship.position.z -= 0.008
        this.ship.position.x += 0.002
      }
      else if(this.ship !== '' && this.mode === 'go'){
        this.ship.position.z += 0.05
        
      }
      renderer.render(scene, camera)
    },


  

  },
  mounted () {
    this.init()
    setTimeout(() => {
      if(!this.finished){
        document.querySelector('#Loader').innerHTML = 'The crew is on duty ...'
      }
    }, 2000);
    setTimeout(() => {
      if(!this.finished){
        document.querySelector('#Loader').innerHTML = 'the System is checking ...'
      }
    }, 4000);
    setTimeout(() => {
      if(!this.finished){
        document.querySelector('#Loader').innerHTML = 'Final preparations are being made ...'
      }
    }, 6000);
    setTimeout(() => {
      if(!this.finished){
        document.querySelector('#Loader').innerHTML = 'Engines are firing ...'
      }
    }, 8000);
    setTimeout(() => {
      if(!this.finished){
        document.querySelector('#Loader').innerHTML = 'No way! We destroyed by the enemies! Please reload the page and prepare the ship again!'
      }
    }, 10000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.GLTFCamera {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 1;
  width: inherit;
  height: inherit;
}
#scene-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#Loader {
  position: absolute;
  top: 50vh;
  right: 40vw;
  text-align: center;
  width: 20vw;
  font-size: 25px;
  font-weight: bold;
  animation: 2s changeOpacity;
  animation-iteration-count: infinite;
}

@keyframes changeOpacity{
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>