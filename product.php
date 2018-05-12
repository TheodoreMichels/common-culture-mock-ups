<?php
include "templates/head.php";
include "templates/header.php";
?>

<div id='product-overlay'>
    <div class='content-container max-container'>
        
        <div class='left'>
            <div class='img-stack'>
                
            </div>
        </div>
        
        <div class='right'>
            
            <div class='text-container'>
                <h3 class='product-title'>Denim Jacket</h3>
                <h4 class='price'>$150.00</h4>
                <p class='description'>Over-dyed bottle green, premium denim jacket with a hand finished cut collar and rustic destressing. The right cuff is embroidered with COMMON CULTURE and the left with LOS ANGELES COLLECTION in mustard thread. Also includes a custom woven label sewn in the neck. Proudly embellished in Los Angeles.</p>
                
                <form>
                    <label>Size</label>
                    <select>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>

                    <label>Quantity</label>
                    <input type='number'><br>
                    <button type='submit'>Add to Cart</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
include "templates/footer.php";
include "templates/foot.php";
?>