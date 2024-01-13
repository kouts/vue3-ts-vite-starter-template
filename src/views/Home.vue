<template>
  <div class="list" style="max-width: 800px">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora deleniti alias nemo. Qui cupiditate, nisi, nemo
      tenetur blanditiis similique voluptas est beatae, fugit recusandae enim totam fuga earum provident!
    </p>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="handleDropClasses(item)"
      :draggable="true"
      @mousedown="onMousedown"
      @dragstart="pickupElem($event, item, index)"
      @dragover.prevent="showDropPlace($event, item, index)"
      @dragenter.prevent
      @drop="moveElem($event, item, index)"
      @dragend.prevent="dragEndClear()"
    >
      <div
        class="list__elem"
        :class="{
          'list__elem--is-dragged': dragedElem && item.id === dragedElem.id
        }"
      >
        <div>{{ item.name }} <button class="btn-drag">===</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop',
  data() {
    return {
      items: [
        { id: 1, name: 'Name 1', order: 1 },
        { id: 2, name: 'Name 2', order: 2 },
        { id: 3, name: 'Name 3', order: 3 },
        { id: 4, name: 'Name 4', order: 4 }
      ],
      dragedElem: null,
      overElem: null,
      targetElem: null
    }
  },
  computed: {
    handleDropClasses() {
      return (item) => {
        if (!this.overElem || !this.overElem.id) {
          return ''
        }
        if (this.overElem.id === item.id && item.order < this.dragedElem.order) {
          console.log('before')

          return 'drop-place drop-place--before'
        }
        if (this.overElem.id === item.id && item.order > this.dragedElem.order) {
          console.log('after')

          return 'drop-place drop-place--after'
        }
      }
    }
  },
  methods: {
    onMousedown(event) {
      this.targetElem = event.target
    },
    dragEndClear() {
      console.log('dragEnd')
      this.dragedElem = null
      this.overElem = null
    },
    pickupElem(event, elem, index) {
      if (this.targetElem.classList.contains('btn-drag') === false) {
        event.preventDefault()
      } else {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        this.dragedElem = { ...elem }
      }
    },
    showDropPlace(event, elem, index) {
      if (elem.id !== this.dragedElem.id) {
        this.overElem = { ...elem }
      } else {
        this.overElem = null
      }
    },
    moveElem(event, elem, index) {
      console.log(`moveElem: event: ${event} | elem: ${elem} | index: ${index}`)
      this.items = this.items.filter((item) => item.id !== this.dragedElem.id)
      this.items.splice(index, 0, { ...this.dragedElem })
      this.items.forEach((item, index) => (item.order = index + 1))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  border: 1px solid tomato;
  padding: 10px;
  text-align: initial;
}
.list__elem {
  border: 1px solid blue;
  padding: 5px;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}
.list__elem--is-dragged {
  opacity: 0.7;
  border: 1px dashed skyblue;
}
.drop-place {
  position: relative;
  transition: all 0.3s ease;
}
.drop-place--before {
  padding-top: 40px;
}
.drop-place--after {
  padding-bottom: 40px;
}
.drop-place--before:before {
  position: absolute;
  top: 5px;
  left: 0;
  text-align: center;
  content: 'Drop here';
  width: 100%;
  padding: 5px 0;
  opacity: 0.7;
  border: 1px dashed skyblue;
  box-shadow: inset 0px 0px 5px 2px skyblue;
}
.drop-place--after:after {
  position: absolute;
  bottom: 5px;
  left: 0;
  text-align: center;
  content: 'Drop here';
  width: 100%;
  padding: 5px 0;
  opacity: 0.7;
  border: 1px dashed skyblue;
  box-shadow: inset 0px 0px 5px 2px skyblue;
}
.btn-drag {
  float: right;
  background: none;
  border: none;
}
</style>
