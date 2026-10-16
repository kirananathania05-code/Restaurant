<script>
export default {
  computed: {
    totalItemKeranjang() {
      return this.$store.getters.totalItems;
    },
    daftarKeranjang() {
        return this.$store.state.product.cart;
    },
    daftarProduk() {
      return this.$store.state.product.product;
    }
  },

  methods: {
    beliBarang(nama) {
        this.$store.dispatch('tambahBarang', nama);
    },
    hapusItem(index){
        this.$store.dispatch('hapusBarang', index)
    }
  },
  mounted() {
    this.$store.dispatch('getProductData');
  }
};
</script>

<template>
    <div style="font-family: sans-serif; padding: 24px;">
        <h2>Toko Online - Kiranaa</h2>

        <p>Total Item di Keranjang (Getter): <strong>{{ totalItemKeranjang }}</strong></p>

        <button @click="beliBarang('Buku Pemrograman')">Buku Pemrograman</button>
        <button @click="beliBarang('Kopi Robusta')" style="margin-left: 8px;">Kopi Robusta</button>

        <h3>Isi Keranjang (State):</h3>
        <ul>
            <li v-for="(item, index) in daftarKeranjang" :key="index">{{ item }}</li>
            <button v-on:click="hapusItem(index)">Hapus Item</button>
        </ul>
        </div>
        <div 
        v-for="(item, key) in daftarProduk" 
        :key="key" 
        style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        
        <img 
          :src="item.imageUrl" 
          :alt="item.name" 
          style="width: 100%; height: 140px; object-fit: cover; border-radius: 4px;" 
        />
        
        <h4 style="margin: 12px 0 6px;">{{ item.name }}</h4>
        <p style="color: #666; margin: 0 0 6px; font-size: 14px;">Kategori: {{ item.category }}</p>
        <p style="font-weight: bold; color: #2e7d32; margin: 0 0 12px;">
          Rp {{ Number(item.price).toLocaleString('id-ID') }}
        </p>

</div>


</template>

<style scoped>

</style>